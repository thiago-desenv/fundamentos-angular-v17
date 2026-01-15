import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  // @HostBinding('attr.style') attrStyle = 'background-color: orange;';
  // @HostBinding('style') propStyle = 'background-color: red;'
  // @HostBinding('style') propStyleObj = { backgroundColor: 'pink', color: 'white' };
  // @HostBinding('style.backgroundColor') bgColor = 'green';
  // @HostBinding('style.color') color = 'white';
  @HostBinding('style.fontSize.px') size = 100;
}
