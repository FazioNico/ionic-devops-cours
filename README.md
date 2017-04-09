<!--
@Author: Nicolas Fazio <webmaster-fazio>
@Date:   09-04-2017
@Email:  contact@nicolasfazio.ch
@Last modified by:   webmaster-fazio
@Last modified time: 09-04-2017
-->

<img src="http://cloudoki.com/images/frameworks/ionic.png" width="80"><img src="https://live.zoomdata.com/zoomdata/service/connection/types/icon/MONGO_MONGO?v=$%7Btimestamp%7D" width="80"><img src="http://apps.octoconsulting.com/images/expressIcon.png" width="80"><img src="https://material.angularjs.org/latest/img/icons/angular-logo.svg" width="80"><img src="http://code.runnable.com/images/provider-icons/icon-node.js.svg" width="80">

# Ionic DevOps - Cours
Ionic MEAN Stack DevOps cours for [Nomades Advenced Technologie](http://nomades.ch).

## Step 01 | Wrap Front-end with Back-end
In this step we'll see how to sing Front-End & Back-End in same project folder.

- create only one project folder with Front-end and Back-end
- merge package.json
- update run scripts with
```
"start:dev": "npm run mongod & npm run server:dev & ionic serve",
"server": "tsc server.ts --outDir ./dist && node ./dist/server.js",
"server:dev": "tsc server.ts -w --outDir ./dist & nodemon ./dist/server.js  --ignore src/ --ignore www/ --ignore .tmp/",
"mongod": "$HOME/Applications/mongodb/bin/mongod --dbpath $HOME/Applications/mongodb/data/db",
```
- and add
```
"engines": {
  "node": "~7.0.0"
},
```
- update `tsconfig.json` with exlude
```
"dist",
"server/**/*.ts",
"server.ts"
```
- try `$ npm run start:dev` to run front & back-end
- `cmd + c` to kill process

## About author
Hi, i'm a Front-end developper living in Geneva Switzerland and i build hybrid mobile & web applications for almost 15 years. You can follow me on Twitter @FazioNico or checkout my own website http://nicolasfazio.ch
