"use strict";
/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   10-07-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 15-07-2017
*/
exports.__esModule = true;
var development_1 = require("../environments/development");
var production_1 = require("../environments/production");
function environmentConfig() {
    var env = development_1.devVariables;
    if (process.env.NODE_ENV === 'prod') {
        env = production_1.prodVariables;
    }
    return env;
}
exports.environmentConfig = environmentConfig;
exports.SECRET_TOKEN_KEY = 'this is a bad secret sentence';
exports.DB_NAME = environmentConfig().dbName;
exports.DB_HOST = environmentConfig().dbHost;
exports.BCRYPT_ROUND = 10;
exports.PASSWORD_MIN_LENGHT = 6;
exports.JWT_EXPIRE = 86400000;
