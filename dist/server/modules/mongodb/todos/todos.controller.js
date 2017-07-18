"use strict";
/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   21-12-2016
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 10-07-2017
*/
exports.__esModule = true;
var mongoose = require("mongoose");
var todo_model_1 = require("./todo.model");
var toObjectId = function (_id) {
    return mongoose.Types.ObjectId.createFromHexString(_id);
};
exports.todoController = {
    getItems: function (req, res) {
        todo_model_1.Todo.find(function (err, docs) {
            if (err)
                return console.log(err);
            res.json(docs);
        });
    },
    getItem: function (req, res) {
        todo_model_1.Todo.findById(toObjectId(req.params.id), function (err, doc) {
            if (err)
                return console.log(err);
            res.json(doc);
        });
    },
    deleteItem: function (req, res) {
        todo_model_1.Todo.findByIdAndRemove(toObjectId(req.params.id), function (err, doc) {
            if (err)
                return console.log(err);
            res.json(doc);
        });
    },
    addItem: function (req, res) {
        (new todo_model_1.Todo(req.body)).save(function (err, doc) {
            if (err)
                return console.log(err);
            res.json(doc);
        });
    },
    updateItem: function (req, res) {
        var updateTodo = req.body;
        delete updateTodo._id;
        todo_model_1.Todo.update({ _id: toObjectId(req.params.id) }, updateTodo, function (err, doc) {
            if (err)
                return console.log(err);
            updateTodo._id = req.params.id;
            var response = {
                result: true,
                response: updateTodo
            };
            res.json(response);
        });
    }
};
