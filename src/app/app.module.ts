/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   30-05-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 15-07-2017
 */

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
import { TodosService } from '../providers/todos-service/todos-service';

import { EnvironmentsModule } from "./environment/environment.module";

const pages:Array<any> = [
  HomePage
]
const providers:Array<any> = [
  StatusBar,
  SplashScreen,
  TodosService,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
];
/**
 * See Ionic Docs for AppConfiguration
 * => https://ionicframework.com/docs/api/config/Config/
 */
const ionicAppConfig:Object = {
  tabsPlacement: 'top',
  mode: 'md'
};

@NgModule({
  declarations: [MyApp, ...pages],
  imports: [
    EnvironmentsModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, ionicAppConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ...pages],
  providers: [...providers] // do not use ES8 synthax, it meke trouble on `build --prod`
})
export class AppModule {}
