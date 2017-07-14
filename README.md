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

### Step 04 | Add environment variable
In this step we'll add and use environement configuration variable to switch from dev to prod environement

- create file `./webpack.config.js` in root app and add this

```
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
```
- Create folder `./environments` in root app
- create files `./environments/env-model.ts` and add this   

```
export interface IEnvironment {
  apiEndpoint: string,
  environmentName: string,
  ionicEnvName: string,
  dbHost: string,
  dbName: string
}
```
- create files `./environments/development.ts` and add this

```
import { IEnvironment } from "./env-model";

export const devVariables:IEnvironment = {
  environmentName: 'Development Environment',
  ionicEnvName: 'dev',

  // Front-end
  apiEndpoint: 'http://localhost:8080',

  // Back-end
  dbHost: 'mongodb://localhost:27017',
  dbName: 'test'
};
```
- create files `production.ts` and add your production environment variable
- create folder `./src/app/environment` in app folder
- create `./src/app/environment/environment.module.ts` and add this

```
import { NgModule } from '@angular/core';
import { EnvVariables } from './environment.token';
import { devVariables } from '../../../environments/development';
import { prodVariables } from '../../../environments/production';
import { IEnvironment } from "../../../environments/env-model";


declare const process: any; // Typescript compiler will complain without this

export function environmentFactory():IEnvironment {
  let env:IEnvironment = process.env.IONIC_ENV === 'prod' ? prodVariables : devVariables;
  if(process.env.IONIC_ENV != 'prod') console.log('env->', env)
  return env
}

@NgModule({
  providers: [
    {
      provide: EnvVariables,
      useFactory: environmentFactory
    }
  ]
})
export class EnvironmentsModule {}
```
- create file `./src/app/environment/environment.token.ts` and add this

```
/**
 * [Angular Dependency injection with InjectionToken()]
 * See Angular Docs:
 *    => https://angular.io/guide/dependency-injection
 *    => https://angular.io/guide/dependency-injection#non-class-dependencies
 *    => https://angular.io/guide/dependency-injection#injection-token
 *    => https://angular.io/api/core/InjectionToken
 */

 import { InjectionToken } from "@angular/core";
 import { IEnvironment } from "../../../environments/env-model";

 export let EnvVariables = new InjectionToken<IEnvironment>("env.variables");
```

<b>App.module</b>
- import EnvironmentsModule
- add EnvironmentsModule into bootstrap imports

<b>Providers</b>
- change api url endpoint by using EnvironmentsModule

```
import { EnvVariables } from '../../app/environment/environment.token';
import { IEnvironment } from "../../../environments/env-model";
...
const TODOS_URL:string = "/todos"
...
constructor(public http: Http, @Inject(EnvVariables) public envVariables:IEnvironment)
...
this.http.get(`${this.envVariables.apiEndpoint+TODOS_URL}`)
...
```

<b>Package.json</b>
- update run scripts to reflect the following

```
"start:dev": "npm run mongod & npm run server:dev & ionic serve --dev",
"start:prod": "npm run server & ionic serve --prod",
"server": "tsc server.ts --outDir ./dist && NODE_ENV=prod node ./dist/server.js ",
"server:dev": "tsc server.ts -w --outDir ./dist & nodemon ./dist/server.js --dev  --ignore src/ --ignore www/ --ignore .tmp/",
"mongod": "$HOME/Applications/mongodb/bin/mongod --dbpath $HOME/Applications/mongodb/data/db",
"clean": "ionic-app-scripts clean",
"build": "ionic-app-scripts build",
"ionic:build": "ionic-app-scripts build --prod",
"ionic:serve": "ionic-app-scripts serve",
"test": "karma start ./test-config/karma.conf.js"
```
- link our special webpack.config file

```
"config": {
  "ionic_webpack": "./webpack.config.js"
},
```

<b>tsconfig.json</b>
- update include files with

```
"include": [
  "src/**/*.ts",
  "environments/**/*.ts"
],
```

<b>ItesmPage</b>
- fix test to pass true

<b>./server/config.ts</b>
- update with

```
import { devVariables } from '../environments/development';
import { prodVariables } from '../environments/production';
import { IEnvironment } from "../environments/env-model";

export function environmentConfig():IEnvironment {
  let env = devVariables;
  if(process.env.NODE_ENV === 'prod'){env = prodVariables}
  return env;
}
```

<b>.gitignore</b>
- add `environments/**/*.js`
- add `production.*`

<b>Test</b>
- Fix all test to pass true

<b>CLI</b>
- run `$ npm run start:dev` to start in development mode
- run `$ npm run start:prod` to start in production mode

## About author
Hi, i'm a Front-end developper living in Geneva Switzerland and i build hybrid mobile & web applications for almost 15 years. You can follow me on Twitter @FazioNico or checkout my own website http://nicolasfazio.ch
