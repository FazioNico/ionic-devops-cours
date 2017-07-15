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


### Step 06 | Deploy BDD on MongoLab
In this step we'll deploy BDD with MongoLab.

- refere to this official tutorial: [http://docs.mlab.com/](http://docs.mlab.com/)
- update value of `dbHost;dbName` into `./environments/production.ts` file.
- update server congiguration file `./server/config.ts` with the following code

```
import { devVariables } from '../environments/development';
import { prodVariables } from '../environments/production';
import { IEnvironment } from "../environments/env-model";

declare var process:any;

export function environmentConfig():IEnvironment {
  let env = devVariables;
  if(process.env.NODE_ENV === 'prod'){env = prodVariables}
  return env;
}

export const SECRET_TOKEN_KEY: string = 'this is a bad secret sentence';
export const DB_NAME: string = environmentConfig().dbName;
export const DB_HOST: string = environmentConfig().dbHost;
export const BCRYPT_ROUND: number = 10;
export const PASSWORD_MIN_LENGHT: number = 6;
export const JWT_EXPIRE: number = 86400000;
```

- update `./server/modules/mongo.ts` to the console.log() with mongo endpoint

```
if (err) { reject(`Error connecting to MongoDB! -> ${MONGODB_URI}`)}
else{  resolve(`MongoDB Ready! -> ${MONGODB_URI}`); }
```
- run `$ npm run start:prod`

## About author
Hi, i'm a Front-end developper living in Geneva Switzerland and i build hybrid mobile & web applications for almost 15 years. You can follow me on Twitter @FazioNico or checkout my own website http://nicolasfazio.ch
