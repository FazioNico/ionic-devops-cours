"use strict";
/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   14-12-2016
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-03-2017
*/
exports.__esModule = true;
var app_1 = require("./server/app");
var NodeServer = new app_1.Server();
NodeServer.bootstrap();
