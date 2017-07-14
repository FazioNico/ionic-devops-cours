/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-07-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 15-07-2017
 */

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
