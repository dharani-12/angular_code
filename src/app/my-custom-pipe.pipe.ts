import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPipe'
})
export class MyCustomPipePipe implements PipeTransform {

  transform(_value: any, ...args: any[]): any {
    return CSSTransformValue;
  }

}
