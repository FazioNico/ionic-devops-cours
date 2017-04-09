/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   08-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 08-04-2017
 */
import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

// define a Todo Interface to better usage
export interface ITodo {
  _id: string;
  description: string;
  isComplete: boolean;
  deadline?: number;
  expire?: boolean;
}

export const TODOS_URL = 'http://localhost:8080/todos'
/*
  Generated class for the TodosService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TodosService {

  public todos: Observable<ITodo[]>;
  private _todos: BehaviorSubject<ITodo[]>;
  private _dataStore: {  // This is where we will store our data in memory
    todos: ITodo[]
  };

  constructor(public http: Http) {
    this._dataStore = { todos: [] };
    this._todos = <BehaviorSubject<ITodo[]>>new BehaviorSubject([]);
    this.todos = this._todos.asObservable();
  }

  // Get all todos
  loadAll():void {
    this.http.get(`${TODOS_URL}`)
             .map(response => response.json())
             .subscribe(
                data => {
                  // add new datas to store.todos
                  this._dataStore.todos = data;
                  // assign new state to observable Todos Subject
                  this._todos.next(Object.assign({}, this._dataStore).todos);
                },
                error => this.handleError(`${(error.statusText)? error.statusText + ' Could not load todos.' : 'Could not load todos.'}`) //console.log('Could not load todos.')
             );
  }

  // Get all todo by ID
  load(id: number | string):void {
    this.http.get(`${TODOS_URL}/${id}`)
             .map(response => response.json())
             .subscribe(
                 data => {
                    let notFound = true;
                    this._dataStore.todos.forEach((item, index) => {
                      if (item._id === data.id) {
                        this._dataStore.todos[index] = data;
                        notFound = false;
                      }
                    });
                    if (notFound) {
                      this._dataStore.todos.push(data);
                    }
                    this._todos.next(Object.assign({}, this._dataStore).todos);
                 },
                 error => this.handleError(`${(error.statusText)? error.statusText + ' Could not load todo.' : 'Could not load todo.'}`) //console.log('Could not load todo.')
             );
  }

  // add new todo
  create(todo: ITodo):void {
    //console.log('newtodo->', todo)
    // prepare header
    let body:string = JSON.stringify({description: todo});
    let headers:Headers = new Headers({'Content-Type': 'application/json'});
    // post request to server
    this.http.post(`${TODOS_URL}`, body, {headers: headers})
             .map(response => response.json()) // return response as json
             .subscribe(
                data => {
                  // push new todo into _dataStore.todos
                  this._dataStore.todos.push(data);
                  // assign new state to observable Todos Subject
                  this._todos.next(Object.assign({}, this._dataStore).todos);
                },
                error => this.handleError(`${(error.statusText)? error.statusText + ' Could not create todo.' : 'Could not create todo.'}`) //console.log('Could not create todo.')
             );
  }

  // update todo datas
  update(todo: ITodo):Promise<ITodo|string> {
    let url:string = `${TODOS_URL}/${todo._id}`; //see mdn.io/templateliterals
    let body:string = JSON.stringify(todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    // Return the result in a promise to use into the caller components
    return new Promise((resolve, reject)=>{
      this.http.put(url, body, {headers: headers})
               .map(response => response.json())
               .subscribe(
                   data => {
                      //console.log('data->',  data)
                      // search the todo in the dataStore
                      this._dataStore.todos.forEach((t, i) => {
                        // if todo is into the store we update the todo data.
                        if (t._id === data.response._id) {
                          //console.log('if update t._id === data.response._id ->', t._id, data)
                          // todo is find -> we update the todo into the store
                          this._dataStore.todos[i] = <ITodo>data.response;
                        }
                      });
                      // send new stat to the _todo Subject
                      this._todos.next(Object.assign({}, this._dataStore).todos);
                      // resolve the promise
                      resolve(data.response)
                   },
                   (error:any) => {
                     // format data error
                     let msg:string = `${(error.statusText)? error.statusText + ' Could not update todo' : 'Could not update todo'}`
                     this.handleError(msg)//console.log('Could not update todo.')
                     // reject the promise
                     reject(msg)
                   }
               ); // Eof subscribe
    }); // Eof Promise

  }

  // delete todo by ID
  delete(todoId: string|number):void {
    let url:string = `${TODOS_URL}/${todoId}`;
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    this.http.delete(url, headers)
             .subscribe(
               response => {
                 // find todo into the store
                  this._dataStore.todos.forEach((t, i) => {
                    // if is find split from the store
                    if (t._id === todoId) { this._dataStore.todos.splice(i, 1); }
                  });
                  // update _todos subject
                  this._todos.next(Object.assign({}, this._dataStore).todos);
                  //console.log('deleted')
                },
                error => this.handleError(`${(error.statusText)? error.statusText + ' Could not delete todo.' : 'Could not delete todo.'}`) //console.log('Could not delete todo.')
             );
  }

  // Handle Error
  handleError(error:string):void {
      console.error(error || 'Server error');
      alert(error || 'Server error');
  }
}
