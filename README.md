<!--
@Author: Nicolas Fazio <webmaster-fazio>
@Date:   09-04-2017
@Email:  contact@nicolasfazio.ch
@Last modified by:   webmaster-fazio
@Last modified time: 14-07-2017
-->

<img src="http://cloudoki.com/images/frameworks/ionic.png" width="80"><img src="https://live.zoomdata.com/zoomdata/service/connection/types/icon/MONGO_MONGO?v=$%7Btimestamp%7D" width="80"><img src="http://apps.octoconsulting.com/images/expressIcon.png" width="80"><img src="https://material.angularjs.org/latest/img/icons/angular-logo.svg" width="80"><img src="http://code.runnable.com/images/provider-icons/icon-node.js.svg" width="80">

# Ionic DevOps - Cours
Ionic MEAN Stack DevOps cours for [Nomades Advenced Technologie](http://nomades.ch).


### Step 07 | Deploy Server on Heroku
In this step we'll deploy server side on Heroku.

<b>./server/package.json</b>
- create NEW file `./server/package.json` for run server with the followign code

```
{
  "name": "ionic-devops-cours",
  "author": "Nicolas Fazio",
  "homepage": "http://nicolasfazio.ch/",
  "private": true,
  "scripts": {
    "start": "NODE_ENV=prod node ./server.js"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.17.2",
    "cors": "^2.8.3",
    "express": "^4.15.3",
    "jsonwebtoken": "^7.4.1",
    "mongodb": "^2.2.30",
    "mongoose": "^4.11.1",
    "morgan": "^1.8.2"
  },
  "devDependencies": {  
    "@types/bcryptjs": "^2.4.0",
    "@types/body-parser": "^1.16.4",
    "@types/cors": "^2.8.1",
    "@types/express": "^4.0.36",
    "@types/jsonwebtoken": "^7.2.2",
    "@types/mongodb": "^2.2.7",
    "@types/mongoose": "^4.7.18",
    "@types/morgan": "^1.7.32",
    "@types/node": "^8.0.13",
    "mongoose": "^4.11.1",
    "nodemon": "^1.11.0",
    "typescript": "2.3.4"  
  },
  "engines": {
    "node": "~7.0.0"
  },
  "version": "0.1.0",
  "description": "ionic-devops-server: JS Server side Ionic cours"
}
```

<b>Git</b>
- remove `./dist` ignored folder from `.gitignore`
- `$ git add .` & `$ git commit -m 'add ./dist folder with server ready'`

<b>./server/.gitignore</b>
- create NEW file `./server/gitignore` for ignore server files with the followign code


 ```
 # Specifies intentionally untracked files to ignore when using Git
 # http://git-scm.com/docs/gitignore

 *~
 *.sw[mnpcod]
 *.log
 *.tmp
 *.tmp.*
 log.txt
 *.sublime-project
 *.sublime-workspace
 .vscode/
 npm-debug.log*

 .idea/
 .sass-cache/
 .tmp/
 .versions/
 coverage/
 # dist/
 node_modules/
 tmp/
 temp/
 hooks/
 platforms/
 plugins/
 plugins/android.json
 plugins/ios.json
 www/
 $RECYCLE.BIN/

 .DS_Store
 Thumbs.db
 UserInterfaceState.xcuserstate

 # Ignore deploy Browser version
 .publish/
 ```

 <b>Git</b>
 - `$ git add .` & `$ git commit -m 'add server ignore files'`


 <b>Web</b>
 - create your own heroku account
 - follow required point from the user get started doc for NodeJS
 [https://devcenter.heroku.com/articles/git](https://devcenter.heroku.com/articles/git)
 and [https://devcenter.heroku.com/articles/getting-started-with-nodejs](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) to have more details on how to use Heroku with NodeJS & Git.


<b>CLI<b>
- `$ git checkout master`
- `$ heroku create`
- check with `$ git remote -v`
- optional: `$ git checkout <WORKING_BRANCH>`


<b>./environments/production.ts<b/>
- change url endPoints by the herokuapp server


<b>Then ...</b>
- run the following command

```
-

tsc server.ts --outDir ./dist && cp ./server/package.json ./dist/package.json && cp ./server/.gitignore ./dist/.gitignore && git add --all && git commit -m 'upd version - `date`' && git subtree split -P dist -b heroku-serve && git push heroku heroku-serve:master --force && git branch -D heroku-serve && heroku ps:scale web=1 && heroku open

-
```
- to have a better usage, simply add it to a run script like `"deploy:server": "...previouse bash code..."` in `./package.json`



## About author
Hi, i'm a Front-end developper living in Geneva Switzerland and i build hybrid mobile & web applications for almost 15 years. You can follow me on Twitter @FazioNico or checkout my own website http://nicolasfazio.ch
