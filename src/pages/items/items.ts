/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   08-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 09-04-2017
 */

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription.js'

import { TodosService, ITodo } from '../../providers/todos-service/todos-service';

/**
 * Generated class for the Items page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'items'
})
@Component({
  selector: 'page-items',
  templateUrl: 'items.html',
})
export class Items {

  public todos:Observable<ITodo[]>;
  private _timerSubscribe:Subscription

  constructor(
    public navCtrl: NavController,
    public todoService: TodosService
  ) {
    this.todos = this.todoService.todos; // subscribe to entire collection
    this.todoService.loadAll()
    // run Observable deadline watcher
    this.watchDeadline()
  }

  /* Ionc Event */
  ionViewWillUnload(){
    // don't forget to unsubscribe() on ionViewWillUnload
    if(this._timerSubscribe) this._timerSubscribe.unsubscribe();
  }

  /* Event Methode */
  addTodo(todoInput:any):void {
    //console.log('todoInput->',todoInput)
    this.todoService.create(todoInput.value)
    this.clearInput(todoInput);
  }

  toggleComplete(todo:ITodo):void {
    todo.isComplete = !todo.isComplete;
    this.todoService.update(todo)
  }

  deleteTodo(todo:ITodo):void {
    //console.log('delete todo-> ', todo)
    this.todoService.delete(todo._id)
  }

  navToEdit(todo:ITodo):void {
    console.log(todo)
    this.navCtrl.push('item-edit', {
      id: todo._id,
      todo: todo
    })
  }

  /* Core Methode */
  clearInput(todoInput:any):void{
    todoInput.value = '';
  }

  watchDeadline(){
    let todoWatcher:Array<any> = [];
    let timer:Observable<number> = Observable.timer(2000,1000);

    this._timerSubscribe = timer.subscribe((t:number) => {
      this.todos.forEach((todos:ITodo[])=>{
        // add all todos into the todoWatcher[]
        todoWatcher = [...todos]
      })
      // map todoWatcher[] to find todo with coming deadline
      todoWatcher.map((todo:any)=>{
        // if todo.deadline is smaller or equal to current time
        // && if todo is NOT already expired
        // run isDeadline(todo) to display alert
        if((todo.deadline <= Date.now()) && (todo.expire != true)){
          return this.isDeadline(t, todo)
        }
      })
    });
  }

  isDeadline(t:number, todo:ITodo){
    console.info('isDeadline-> ', todo);
    // update expire param
    todo.expire = true;
    // update todo data
    this.todoService.update(todo)
    // TODO:
    // disable alert and use Native Plugin
    // with the custom provider localNotifications
    // to have debug mode in browser
    alert(`Expired: ${todo.description}`)
  }
}
