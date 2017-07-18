"use strict";
/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   22-12-2016
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 10-07-2017
*/
exports.__esModule = true;
var mongoose = require("mongoose");
// Import Schemas
var todo_schema_1 = require("./todo.schema");
// Define & export Mongoose Model with Interface
exports.Todo = mongoose.model('todos', todo_schema_1.todoSchema);
