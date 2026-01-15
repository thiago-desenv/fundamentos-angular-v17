import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @HostBinding('attr.style') attrStyle = 'background-color: orange;';
}
