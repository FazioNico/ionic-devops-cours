/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-07-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 15-07-2017
 */

 var path = require('path');
 var webpack = require('webpack');
 var ionicWebpackFactory = require(process.env.IONIC_WEBPACK_FACTORY);
 var ModuleConcatPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
 var config = require('@ionic/app-scripts/config/webpack.config.js')

/**
 * [prodPlugins]
 * Removed cause it mek trouble on `$ ionic serve --prod`
 */
 var prodPlugins = [];
 if (process.env.IONIC_ENV === 'prod') {
   prodPlugins.push(new ModuleConcatPlugin());
 }

 config.plugins = [
   new webpack.EnvironmentPlugin(['IONIC_ENV']),
   ionicWebpackFactory.getIonicEnvironmentPlugin(),
   ionicWebpackFactory.getCommonChunksPlugin(),
 ] //.concat(prodPlugins);
 // or other synthax:
 // config.plugins.push(new webpack.EnvironmentPlugin(['IONIC_ENV']))

 module.exports = config
