"use strict";
/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   21-12-2016
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 15-07-2017
*/
exports.__esModule = true;
var mongoose = require("mongoose");
// Import MongoDB config
var config_1 = require("../../config");
/*
  Use TypeScript with mongoose models
  See https://github.com/Appsilon/styleguide/wiki/mongoose-typescript-models
  and https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6 for more info about
  Mongoose Interface & Generic Types declaraton.
*/
// Define MongoDB path url
var MONGODB_URI = process.env.MONGODB_URI || config_1.DB_HOST + "/" + config_1.DB_NAME;
exports.mongoDbConnect = function () {
    return new Promise(function (resolve, reject) {
        // Connect to MongoDB with Mongoose
        mongoose.connect(MONGODB_URI, {
            useMongoClient: true
        }, function (err) {
            if (err) {
                reject("Error connecting to MongoDB! -> " + MONGODB_URI);
            }
            else {
                resolve("MongoDB Ready! -> " + MONGODB_URI);
            }
        });
    });
};
