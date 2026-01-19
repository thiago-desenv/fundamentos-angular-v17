import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]'
})
export class FocusSecondInputDirective {
  @HostBinding('style.backgroundColor') bgColor = 'blue';
  @HostBinding('style.color') color = 'white';
  @HostBinding('style.MarginTop.px') marginTop = '2';
  @HostBinding('textContent') text = 'Sou uma div';
}
