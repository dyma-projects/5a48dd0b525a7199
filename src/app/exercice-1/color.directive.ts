import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') color: string;

   @HostListener('window:keyup', ['$event']) windowClick($event) {
    console.log($event);
    if ($event.code === 'ArrowRight') {
      this.color = 'red';
    } else if ($event.code === 'ArrowLeft') {
      this.color = 'yellow';
    } else if ($event.code === 'ArrowUp') {
      this.color = 'green';
    } else if ($event.code === 'ArrowDown') {
      this.color = 'blue';
    }
   }

  constructor() { }

}
