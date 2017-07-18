"use strict";
/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   24-12-2016
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 10-07-2017
*/
exports.__esModule = true;
exports.log = function (req, res, next) {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Query route path-> ", req.route.path);
    console.log("Query route params-> ", req.params);
    console.log("Query route methode-> ", req.route.methods);
    next();
};
