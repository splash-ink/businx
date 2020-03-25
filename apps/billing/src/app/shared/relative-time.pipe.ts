import { Pipe, PipeTransform } from '@angular/core';
import { formatRelative } from 'date-fns';
import { pt } from 'date-fns/locale'

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: string | number | Date, prefixMsg?: string): any {
    const timestamp = Date.now();
    let date;

    if (typeof value === 'string') {
      date = new Date(Date.parse(value));
    }

    const msg = formatRelative(date, timestamp, { locale: pt });

    return prefixMsg !== null && prefixMsg !== undefined ? `${prefixMsg} ${msg}` : msg;
  }

}
