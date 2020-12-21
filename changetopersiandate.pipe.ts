import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'changetopersiandate'
})
export class ChangetopersiandatePipe implements PipeTransform {

  transform(gDate: string): string {
    if(gDate){
      gDate = gDate.slice(0,8);
      let faDate = moment(gDate).locale('fa').format("YYYY/MM/DD");
      return faDate;
    }
  }

}
