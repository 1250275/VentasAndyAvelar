import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'branchFilter'
})
export class BranchFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (!arg || arg.length < 3) return value;
    const resultPosts = [];
    for (const post of value) {
      const text = String(post.sucursal ?? '');
      if (text.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
