import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: 'button[appDisabled]'
})
export class DisabledDirective {
  // @HostBinding('attr.disabled') attrDisabled = false;
  @HostBinding('disabled') propDisabled = true;

}
