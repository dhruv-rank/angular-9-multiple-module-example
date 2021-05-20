import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filter: string): any {
    if (!value || !filter) {
      return value;
    }
    return value.filter(item => item.title ? item.title.toLowerCase().includes(filter.toLowerCase()) : item.name.toLowerCase().includes(filter.toLowerCase()));
  }

}
