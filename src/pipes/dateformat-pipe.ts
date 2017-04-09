/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   08-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 08-04-2017
 */

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DateFormat pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  /*
    Takes a timestamp and return as 01/01/2017
   */
  transform(value:number, args:any) {
    let date:Date = new Date(+value); // make sure it's a number
    let year:string = date.getFullYear()+'';
    let month:string = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day:string = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return day + '/' + month + '/' + year;
  }
}
