import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.background-color') bgColor = 'transparent';
}
