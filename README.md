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

### Step 03 | Native Plugin
In this step we'll add LocalNotifications Native Plugin to display notification to  user when a todo is over deadline. And we learn how to mock a native plugin to have a better debug experiance in browser.

CLI
```
$ ionic cordova plugin add de.appplant.cordova.plugin.local-notification
$ npm install --save @ionic-native/local-notifications
```

Page Items
- import `LocalNotifications` ionic plugin
- add `localNotifications.schedule()` into the `isDeadline()`
    - Doc: [https://ionicframework.com/docs/native/local-notifications/](https://ionicframework.com/docs/native/local-notifications/)

Provider
- create new folder `./notifications-service` into `./providers`
- create new file `notifications-mock.ts` & `notif-model.ts`
- create mockup class for notifications plugin like

```
import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { INotifItem } from "../../providers/notifications-service/notif-model";
import { Platform } from 'ionic-angular';

@Injectable()
export class NotifMock  {

  constructor(
    public platform:Platform,
    public localNotifications: LocalNotifications
  ){
  }
  schedule(notif:INotifItem):void {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //console.log('platform-> ',this.platform.is('core'))
      if (this.platform.is('core')) {
        alert(`Expired: ${notif.text}`)
      }
      else {
        this.localNotifications.schedule(notif)
      }
    });
  }
}
```
- create Interface Notif model like
```
export interface INotifItem{
 id: number,
 title?: string,
 text: string,
 firstAt?: string, // monday_9_am,
 every?: string, // "week",
 sound?: string, // Default -> isAndroid? 'file://sound.mp3': 'file://beep.caf',
 icon?: string, // "http://icons.com/?cal_id=1"
 data: { secret: string }
}
```
- and import into `ItemsPage`

ItemsModule
- import `LocalNotifications` ionic plugin
- add plugin with mockup class into `providers`

config.xml
- add `<plugin name="de.appplant.cordova.plugin.local-notification" spec="~0.8.4" />`

Items.spec.ts
- fix test fails

## About author
Hi, i'm a Front-end developper living in Geneva Switzerland and i build hybrid mobile & web applications for almost 15 years. You can follow me on Twitter @FazioNico or checkout my own website http://nicolasfazio.ch
