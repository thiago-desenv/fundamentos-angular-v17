import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputBackgroundDirective]'
})
export class InputBackgroundDirectiveDirective {
  @Input() appInputBackgroundDirective: string = 'white';
  @Input() textColor: string = 'black';

  @HostBinding('style.background-color') backgroundColor = 'transparent';
  @HostBinding('style.color') color: string = '';

  @HostListener('focus') onFocus() {
    this.backgroundColor = this.appInputBackgroundDirective;
    this.color = this.textColor;
  }

  @HostListener('blur') onblur() {
    this.backgroundColor ='white';
    this.color = 'black';
  }

  @HostListener('keyup') onKeyUp() {
    this.color = this.textColor;
  }
}
