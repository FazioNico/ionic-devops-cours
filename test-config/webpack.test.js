/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   14-07-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 14-07-2017
 */

 var webpack = require('webpack');
 var path = require('path');

 module.exports = {
   devtool: 'inline-source-map',

   resolve: {
     extensions: ['.ts', '.js']
   },

   module: {
     rules: [
       {
         test: /\.ts$/,
         loaders: [
           {
             loader: 'ts-loader'
           } , 'angular2-template-loader'
         ]
       },
       {
         test: /\.html$/,
         loader: 'html-loader'
       },
       {
         test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
         loader: 'null-loader'
       }
     ]
   },

   plugins: [
     new webpack.ContextReplacementPlugin(
       // The (\\|\/) piece accounts for path separators in *nix and Windows
       /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
       root('./src'), // location of your src
       {} // a map of your routes
     )
   ]
 };

 function root(localPath) {
   return path.resolve(__dirname, localPath);
 }
