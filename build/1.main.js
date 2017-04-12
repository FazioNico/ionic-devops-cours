webpackJsonp([1],{

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_edit__ = __webpack_require__(616);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEditModule", function() { return ItemEditModule; });
/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   08-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 08-04-2017
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemEditModule = (function () {
    function ItemEditModule() {
    }
    return ItemEditModule;
}());
ItemEditModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__item_edit__["a" /* ItemEdit */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_edit__["a" /* ItemEdit */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__item_edit__["a" /* ItemEdit */]
        ]
    }),
    __metadata("design:paramtypes", [])
], ItemEditModule);

//# sourceMappingURL=item-edit.module.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_todos_service_todos_service__ = __webpack_require__(301);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemEdit; });
/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   08-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 09-04-2017
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ItemEdit page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ItemEdit = (function () {
    function ItemEdit(navCtrl, navParams, fb, todoService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.todoService = todoService;
        // get todo item from navParams
        this.todo = this.navParams.get('todo');
        if (this.todo) {
            // converting todo.deadline to IOS Format for the Ionic DatePicker input
            this.todoDate = new Date(+this.todo.deadline).toISOString();
            // create a FormGroup to edit todo with todo datas
            this.form = fb.group({
                description: [this.todo.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(2)],
                isComplete: [this.todo.isComplete, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
                deadline: [this.todoDate, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
                expire: [this.todo.expire, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]
            });
        }
        else {
            // TODO: datas NOT in navParams:
            /* Now we have two solution:
                  1: - get data todo with todoService.load() by using navParams id
                       if existe else using  URL last params after /
                     - add async pipe in html
                     - add Elvis operator
      
                  2: - kick user in root app if navParams in empty
                     - add Elvis operator
            */
            // Solution 2: kick user in root page app
            // create a empty form
            this.form = fb.group({
                description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(2)],
                isComplete: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
                deadline: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
                expire: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]
            });
            console.log('kick user');
            this.navCtrl.setRoot('items');
        }
    }
    ItemEdit.prototype.saveTodo = function () {
        var _this = this;
        // use the form datas
        var newTodo = this.form.value;
        // convert new ISO Date to timestampe (number) to store into our bdd
        var newDate = new Date(newTodo.deadline).getTime();
        //console.log(newDate )
        // add ID param to the updated todo
        newTodo._id = this.todo._id;
        // add convert ISO Date format to the param deadline
        newTodo.deadline = newDate;
        // then send the todo ready to todoService
        this.todoService.update(newTodo)
            .then(function (res) {
            // if update result is OK pop() navigation
            _this.navCtrl.pop();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    ItemEdit.prototype.deleteTodo = function () {
        // send todo ID to todoService
        this.todoService.delete(this.todo._id);
        // pop() navigation
        this.navCtrl.pop();
    };
    ItemEdit.prototype.cancel = function () {
        // pop() navigation
        this.navCtrl.pop();
    };
    ItemEdit.prototype.toogleClick = function () {
        console.log(this.form.value.expire);
    };
    return ItemEdit;
}());
ItemEdit = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])({
        name: 'item-edit',
        segment: 'items/:id',
        defaultHistory: ['items']
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-item-edit',template:/*ion-inline-start:"/Users/webmaster-fazio/projets_html/ionic-devops-cours/src/pages/item-edit/item-edit.html"*/'<!--\n@Author: Nicolas Fazio <webmaster-fazio>\n@Date:   08-04-2017\n@Email:  contact@nicolasfazio.ch\n@Last modified by:   webmaster-fazio\n@Last modified time: 08-04-2017\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Edit todo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<!--\n  Generated template for the ItemEdit page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n    <h2>Description</h2>\n    <form [formGroup]="form">\n        <ion-textarea formControlName="description" value="{{todo?.description}}"></ion-textarea>\n        <ion-item>\n          <small>Deadline: </small>\n          <ion-datetime formControlName="deadline" displayFormat="HH:mm - DD/MM/YY" pickerFormat="HH:mm DD MMM YY" [(ngModel)]="todoDate"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Expired:</ion-label>\n          <ion-toggle formControlName="expire" (ionChange)="toogleClick()" checked="{{todo?.expire}}"></ion-toggle>\n        </ion-item>\n\n        <p>\n          <small>Status: {{ todo?.isComplete ? "Complete" : "Incomplete" }}</small>\n        </p>\n\n      <ion-row>\n        <ion-col width-40>\n          <button ion-button block (click)="saveTodo()">\n            Save\n          </button>\n        </ion-col>\n        <ion-col width-40>\n          <button ion-button color="light" block (click)="cancel()">\n            Cancel\n          </button>\n        </ion-col>\n        <ion-col width-20>\n          <button ion-button color="danger" block (click)="deleteTodo()">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/webmaster-fazio/projets_html/ionic-devops-cours/src/pages/item-edit/item-edit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_todos_service_todos_service__["a" /* TodosService */]])
], ItemEdit);

//# sourceMappingURL=item-edit.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map