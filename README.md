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


### Step 08 | Deploy Front-end PWA on Github
In this step we'll deploy client Front app Browser version in Github Pages

<b>CLI</b>
- `$ ionic cordova platform add browser`
- `$ ionic cordova build browser`

<b>At this step we'have tree possible way</b>
#### 1. Build pass True and result work in Prod & in Dev
- YOUR_DEPLOY_PATH is `./platforms/browser/www`

#### 2. Build pass True and result NOT work in Prod but WORK in Dev
- open projet in browser and open console...
- see wath you can track and fix error one by one..
  - try build one more time...
- if error is type of `ERROR Error: No provider for t!...` maybe you can't fix bug... so we have to build app in Angular Dev Mode but with Prod environments variable.
- We have to use the folder `./www` to deploy our application.
- run `$ npm run start:prod` to build `./www` folder in dev mode but with prod environments variable.
- YOUR_DEPLOY_PATH is `./www`
(other solution: pass NODE_ENV to client with ` config.plugins.push(new webpack.EnvironmentPlugin(['IONIC_ENV', 'NODE_ENV']))` and detect client side into environment.module.ts as ``)


#### 3. Build pass False and result NOT work in prod but WORK in Dev
- track cli error and fix it one by one.
- Good luck.
- try build one more time...

#### Final step
<b>CLI</b>
- `$ npm install -g gulp`
- `$ npm install --save-dev gulp gulp-gh-pages`

<b>.gitignore</b>
- a folder `.publish/`


<b>Root Folder</b>
- create `./gulpfile.js` with the following code:

```
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

var path = YOUR_DEPLOY_PATH;

gulp.task('deploy', function() {
  return gulp.src( path+'/** /* ' )
    .pipe(ghPages());
});
```

<b>./package.json</b>
- add script `"deploy:client": "gulp deploy",`

<b>CLI</b>
- run `$ npm run deploy:client`
- go on your gh-page like: https://GIT_HUB_USER_NAME.github.io/REPOSITORY_NAME/


## About author
Hi, i'm a Front-end developper living in Geneva Switzerland and i build hybrid mobile & web applications for almost 15 years. You can follow me on Twitter @FazioNico or checkout my own website http://nicolasfazio.ch
