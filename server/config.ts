/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   10-07-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 15-07-2017
*/

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
