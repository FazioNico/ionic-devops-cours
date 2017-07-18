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
exports.todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    isComplete: {
        type: Boolean,
        "default": false
    },
    deadline: { type: Number, "default": Date.now() },
    expire: { type: Boolean, "default": false }
});
