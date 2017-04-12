webpackJsonp([0],{

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_deadline_pipe__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_sortdesc_pipe__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_dateformat_pipe__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notifications_service_notifications_mock__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__ = __webpack_require__(614);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsModule", function() { return ItemsModule; });
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








var ItemsModule = (function () {
    function ItemsModule() {
    }
    return ItemsModule;
}());
ItemsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__items__["a" /* Items */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_deadline_pipe__["a" /* DeadlinePipe */],
            __WEBPACK_IMPORTED_MODULE_4__pipes_sortdesc_pipe__["a" /* SortDescPipe */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_dateformat_pipe__["a" /* DateFormatPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__items__["a" /* Items */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__providers_notifications_service_notifications_mock__["a" /* NotifMock */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_local_notifications__["a" /* LocalNotifications */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__items__["a" /* Items */]
        ]
    }),
    __metadata("design:paramtypes", [])
], ItemsModule);

//# sourceMappingURL=items.module.js.map

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalNotifications; });
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
 * @name Local Notifications
 * @description
 * This plugin allows you to display local notifications on the device
 *
 * @usage
 * ```typescript
 * import { LocalNotifications } from '@ionic-native/local-notifications';
 *
 *
 * constructor(private localNotifications: LocalNotifications) { }
 *
 * ...
 *
 *
 * // Schedule a single notification
 * this.localNotifications.schedule({
 *   id: 1,
 *   text: 'Single ILocalNotification',
 *   sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
 *   data: { secret: key }
 * });
 *
 *
 * // Schedule multiple notifications
 * this.localNotifications.schedule([{
 *    id: 1,
 *    text: 'Multi ILocalNotification 1',
 *    sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
 *    data: { secret:key }
 *   },{
 *    id: 2,
 *    title: 'Local ILocalNotification Example',
 *    text: 'Multi ILocalNotification 2',
 *    icon: 'http://example.com/icon.png'
 * }]);
 *
 *
 * // Schedule delayed notification
 * this.localNotifications.schedule({
 *    text: 'Delayed ILocalNotification',
 *    at: new Date(new Date().getTime() + 3600),
 *    led: 'FF0000',
 *    sound: null
 * });
 * ```
 * @interfaces
 * ILocalNotification
 */
var LocalNotifications = (function () {
    function LocalNotifications() {
    }
    /**
     * Schedules a single or multiple notifications
     * @param options {Notification | Array<ILocalNotification>} optional
     */
    LocalNotifications.prototype.schedule = function (options) { };
    /**
     * Updates a previously scheduled notification. Must include the id in the options parameter.
     * @param options {ILocalNotification} optional
     */
    LocalNotifications.prototype.update = function (options) { };
    /**
     * Clears single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification had been cleared
     */
    LocalNotifications.prototype.clear = function (notificationId) { return; };
    /**
     * Clears all notifications
     * @returns {Promise<any>} Returns a promise when all notifications have cleared
     */
    LocalNotifications.prototype.clearAll = function () { return; };
    /**
     * Cancels single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification is canceled
     */
    LocalNotifications.prototype.cancel = function (notificationId) { return; };
    /**
     * Cancels all notifications
     * @returns {Promise<any>} Returns a promise when all notifications are canceled
     */
    LocalNotifications.prototype.cancelAll = function () { return; };
    /**
     * Checks presence of a notification
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotifications.prototype.isPresent = function (notificationId) { return; };
    /**
     * Checks is a notification is scheduled
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotifications.prototype.isScheduled = function (notificationId) { return; };
    /**
     * Checks if a notification is triggered
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotifications.prototype.isTriggered = function (notificationId) { return; };
    /**
     * Get all the notification ids
     * @returns {Promise<Array<number>>}
     */
    LocalNotifications.prototype.getAllIds = function () { return; };
    /**
     * Get the ids of triggered notifications
     * @returns {Promise<Array<number>>}
     */
    LocalNotifications.prototype.getTriggeredIds = function () { return; };
    /**
     * Get the ids of scheduled notifications
     * @returns {Promise<Array<number>>} Returns a promise
     */
    LocalNotifications.prototype.getScheduledIds = function () { return; };
    /**
     * Get a notification object
     * @param notificationId {any} The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotifications.prototype.get = function (notificationId) { return; };
    /**
     * Get a scheduled notification object
     * @param notificationId {any} The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotifications.prototype.getScheduled = function (notificationId) { return; };
    /**
     * Get a triggered notification object
     * @param notificationId The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotifications.prototype.getTriggered = function (notificationId) { return; };
    /**
     * Get all notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotifications.prototype.getAll = function () { return; };
    /**
     * Get all scheduled notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotifications.prototype.getAllScheduled = function () { return; };
    /**
     * Get all triggered notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotifications.prototype.getAllTriggered = function () { return; };
    /**
     * Register permission to show notifications if not already granted.
     * @returns {Promise<boolean>}
     */
    LocalNotifications.prototype.registerPermission = function () { return; };
    /**
     * Informs if the app has the permission to show notifications.
     * @returns {Promise<boolean>}
     */
    LocalNotifications.prototype.hasPermission = function () { return; };
    /**
     * Sets a callback for a specific event
     * @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall
     * @param callback Call back function. All events return notification and state parameter. clear and clearall return state parameter only.
     */
    LocalNotifications.prototype.on = function (eventName, callback) { };
    LocalNotifications.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */] },
    ];
    /** @nocollapse */
    LocalNotifications.ctorParameters = function () { return []; };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], LocalNotifications.prototype, "schedule", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], LocalNotifications.prototype, "update", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "clear", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 0,
            errorIndex: 2
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "clearAll", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "cancel", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            successIndex: 0,
            errorIndex: 2
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "cancelAll", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number]), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "isPresent", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number]), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "isScheduled", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number]), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "isTriggered", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "getAllIds", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "getTriggeredIds", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "getScheduledIds", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "get", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "getScheduled", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "getTriggered", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "getAll", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "getAllScheduled", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "getAllTriggered", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "registerPermission", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', Promise)
    ], LocalNotifications.prototype, "hasPermission", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            sync: true
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String, Object]), 
        __metadata('design:returntype', void 0)
    ], LocalNotifications.prototype, "on", null);
    LocalNotifications = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* Plugin */])({
            pluginName: 'LocalNotifications',
            plugin: 'de.appplant.cordova.plugin.local-notification',
            pluginRef: 'cordova.plugins.notification.local',
            repo: 'https://github.com/katzer/cordova-plugin-local-notifications',
            platforms: ['Android', 'iOS', 'Windows']
        }), 
        __metadata('design:paramtypes', [])
    ], LocalNotifications);
    return LocalNotifications;
}());
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(614);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifMock; });
/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   09-04-2017
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



var NotifMock = (function () {
    function NotifMock(platform, localNotifications) {
        this.platform = platform;
        this.localNotifications = localNotifications;
    }
    NotifMock.prototype.schedule = function (notif) {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //console.log('platform-> ',this.platform.is('core'))
            if (_this.platform.is('core')) {
                alert("Expired: " + notif.text);
            }
            else {
                _this.localNotifications.schedule(notif);
            }
        });
    };
    return NotifMock;
}());
NotifMock = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */]])
], NotifMock);

//# sourceMappingURL=notifications-mock.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_todos_service_todos_service__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_service_notifications_mock__ = __webpack_require__(615);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
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




//import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the Items page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Items = (function () {
    function Items(navCtrl, todoService, 
        //public localNotifications: LocalNotifications
        notifMock) {
        this.navCtrl = navCtrl;
        this.todoService = todoService;
        this.notifMock = notifMock;
        this.todos = this.todoService.todos; // subscribe to entire collection
        this.todoService.loadAll();
        // run Observable deadline watcher
        this.watchDeadline();
    }
    /* Ionc Event */
    Items.prototype.ionViewWillUnload = function () {
        // don't forget to unsubscribe() on ionViewWillUnload
        if (this._timerSubscribe)
            this._timerSubscribe.unsubscribe();
    };
    /* Event Methode */
    Items.prototype.addTodo = function (todoInput) {
        //console.log('todoInput->',todoInput)
        this.todoService.create(todoInput.value);
        this.clearInput(todoInput);
    };
    Items.prototype.toggleComplete = function (todo) {
        todo.isComplete = !todo.isComplete;
        this.todoService.update(todo);
    };
    Items.prototype.deleteTodo = function (todo) {
        //console.log('delete todo-> ', todo)
        this.todoService.delete(todo._id);
    };
    Items.prototype.navToEdit = function (todo) {
        console.log(todo);
        this.navCtrl.push('item-edit', {
            id: todo._id,
            todo: todo
        });
    };
    /* Core Methode */
    Items.prototype.clearInput = function (todoInput) {
        todoInput.value = '';
    };
    Items.prototype.watchDeadline = function () {
        var _this = this;
        var todoWatcher = [];
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(2000, 1000);
        this._timerSubscribe = timer.subscribe(function (t) {
            _this.todos.forEach(function (todos) {
                // add all todos into the todoWatcher[]
                todoWatcher = todos.slice();
            });
            // map todoWatcher[] to find todo with coming deadline
            todoWatcher.map(function (todo) {
                // if todo.deadline is smaller or equal to current time
                // && if todo is NOT already expired
                // run isDeadline(todo) to display alert
                if ((todo.deadline <= Date.now()) && (todo.expire != true)) {
                    return _this.isDeadline(t, todo);
                }
            });
        });
    };
    Items.prototype.isDeadline = function (t, todo) {
        console.info('isDeadline-> ', todo);
        // update expire param
        todo.expire = true;
        // update todo data
        this.todoService.update(todo);
        //alert(`Expired: ${todo.description}`)
        // Schedule a single notification with native plugin
        // will run notification on mobile or simple alert in browser
        // Magic ;-)
        var newDate = new Date();
        newDate.setMinutes(newDate.getMinutes() + 1);
        this.notifMock.schedule({
            //this.localNotifications.schedule(<INotifItem>{
            id: t,
            text: todo.description,
            //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
            data: { secret: todo._id },
            at: newDate
        });
    };
    return Items;
}());
Items = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])({
        name: 'items'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Component */])({
        selector: 'page-items',template:/*ion-inline-start:"/Users/webmaster-fazio/projets_html/ionic-devops-cours/src/pages/items/items.html"*/'<!--\n@Author: Nicolas Fazio <webmaster-fazio>\n@Date:   08-04-2017\n@Email:  contact@nicolasfazio.ch\n@Last modified by:   webmaster-fazio\n@Last modified time: 08-04-2017\n-->\n\n<!--\n  Generated template for the Items page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Items</ion-title>\n  </ion-navbar>\n  <div id="addTodo" color="primary">\n    <ion-item no-lines color="primary">\n      <ion-input\n        #newTodo\n        (keyup.enter)="addTodo(newTodo)"\n        type="text"\n        placeholder="Add a new todo..." ></ion-input>\n      <button\n        ion-button\n        id="clearInput"\n        color="primary"\n        clear\n        large\n        item-right\n        (click)="clearInput(newTodo)"><ion-icon name="close"></ion-icon>\n      </button>\n    </ion-item>\n  </div>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list>\n\n      <ion-item-sliding #slidingItem *ngFor="let todo of (todos | async | sortBy:\'deadline\'); let i = index;">\n\n        <ion-item>\n            <ion-label>{{ todo.description }}</ion-label>\n            <ion-checkbox (click)="toggleComplete(todo)" [checked]="todo.isComplete"></ion-checkbox>\n            <ion-badge\n              color="{{todo.deadline | deadline }}"\n              item-right>{{ todo.deadline | dateFormat }}\n            </ion-badge>\n        </ion-item>\n\n        <ion-item-options side="right">\n          <button ion-button color="primary" (click)="navToEdit(todo); slidingItem.close()"><ion-icon name="create"></ion-icon></button>\n          <button ion-button color="danger" (click)="deleteTodo(todo)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/webmaster-fazio/projets_html/ionic-devops-cours/src/pages/items/items.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_todos_service_todos_service__["a" /* TodosService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_notifications_service_notifications_mock__["a" /* NotifMock */]])
], Items);

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFormatPipe; });
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

/**
 * Generated class for the DateFormat pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var DateFormatPipe = (function () {
    function DateFormatPipe() {
    }
    /*
      Takes a timestamp and return as 01/01/2017
     */
    DateFormatPipe.prototype.transform = function (value, args) {
        var date = new Date(+value); // make sure it's a number
        var year = date.getFullYear() + '';
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        return day + '/' + month + '/' + year;
    };
    return DateFormatPipe;
}());
DateFormatPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Pipe */])({
        name: 'dateFormat',
    }),
    __metadata("design:paramtypes", [])
], DateFormatPipe);

//# sourceMappingURL=dateformat-pipe.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeadlinePipe; });
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

/**
 * Generated class for the DeadlinePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var DeadlinePipe = (function () {
    function DeadlinePipe() {
    }
    DeadlinePipe.prototype.transform = function (deadline) {
        if (+deadline <= this.addDays(3) && +deadline > Date.now()) {
            return 'warning';
        }
        if (+deadline <= Date.now()) {
            return 'danger';
        }
        return 'primary';
    };
    DeadlinePipe.prototype.addDays = function (days) {
        var result = new Date();
        result.setDate(result.getDate() + days);
        return result.getTime();
    };
    return DeadlinePipe;
}());
DeadlinePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Pipe */])({
        name: 'deadline',
    }),
    __metadata("design:paramtypes", [])
], DeadlinePipe);

//# sourceMappingURL=deadline-pipe.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortDescPipe; });
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

/**
 * Generated class for the SortDescPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var SortDescPipe = (function () {
    function SortDescPipe() {
    }
    /*
      Takes an array and sort in alphabetically order
     */
    SortDescPipe.prototype.transform = function (value, property, order) {
        if (property === void 0) { property = "name"; }
        if (order === void 0) { order = 'asc'; }
        if (order === 'desc') {
            return value.sort(function (a, b) {
                if (b[property] < a[property])
                    return -1;
                if (b[property] > a[property])
                    return 1;
                return 0;
            });
        }
        else {
            return value.sort(function (a, b) {
                if (b[property] > a[property])
                    return -1;
                if (b[property] < a[property])
                    return 1;
                return 0;
            });
        }
    };
    return SortDescPipe;
}());
SortDescPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Pipe */])({
        name: 'sortBy',
        pure: false
    }),
    __metadata("design:paramtypes", [])
], SortDescPipe);

//# sourceMappingURL=sortdesc-pipe.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map