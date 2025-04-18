import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date | string | number, dateFormat: string = 'dd MMM yyyy'): string {
    return format(new Date(value), dateFormat);
  }
}
