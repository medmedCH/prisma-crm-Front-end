import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class ArraySortPipe  implements PipeTransform {
  transform(array: any, field: string): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: any, b: any) => {
      if ((a.value[field]  === 'URGENT') && (b.value[field]  === 'ELEVEE')
        || (a.value[field]  === 'URGENT') && (b.value[field]  === 'MOYEN')
        || (a.value[field]  === 'URGENT') && (b.value[field]  === 'FAIBLE')) {
        return -1;
      } else if ((a.value[field] === 'ELEVEE') && (b.value[field]  === 'MOYEN')
        || (a.value[field] === 'ELEVEE') && (b.value[field]  === 'FAIBLE') ) {
        return -2;
      } else if ((a.value[field]  === 'MOYEN') && (b.value[field]  === 'FAIBLE') ) {
        return -3;
      } else if (a.value[field]  === 'FAIBLE') {
        return 3;
      }
    });
    return array;
  }
}
