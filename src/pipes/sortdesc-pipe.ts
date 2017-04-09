/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   08-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 08-04-2017
 */

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SortDescPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortDescPipe implements PipeTransform {
  /*
    Takes an array and sort in alphabetically order
   */
  transform(value: Array<any>, property:string = "name", order:string = 'asc') {
    if (order === 'desc') {
          return value.sort((a, b)=>{
              if(b[property] < a[property]) return -1;
              if(b[property] > a[property]) return 1;
              return 0;
          }) ;
    }
    else {
      return value.sort((a, b)=>{
          if(b[property] > a[property]) return -1;
          if(b[property] < a[property]) return 1;
          return 0;
      }) ;
    }

  }
}
