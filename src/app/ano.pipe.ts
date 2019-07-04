import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ano'
})
export class AnoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value > 2000 ? 'depois de 2000' : 'antes de 2000';
  }

}
