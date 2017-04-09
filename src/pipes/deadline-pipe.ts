/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   08-04-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 08-04-2017
 */

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DeadlinePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'deadline',
})
export class DeadlinePipe implements PipeTransform {
  transform(deadline: number): 'warning'|'danger'|'primary' {

    if(+deadline <= this.addDays(3) && +deadline > Date.now()){
      return 'warning'
    }

    if (+deadline <= Date.now()) {
      return 'danger'
    }

    return 'primary'

  }

  addDays(days:number):number {
      let result:Date = new Date();
      result.setDate(result.getDate() + days);
      return  result.getTime();
  }
}
