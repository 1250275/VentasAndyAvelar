import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountReceivableFilter'
})
export class AccountReceivableFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (!arg || arg.length < 3) return value;
    const resultPosts = [];
    for (const post of value) {
      const text = String(post.fecha_venta ?? '');
      if (text.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
