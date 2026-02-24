import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-text-title, [appCardtextTitle]',
  host: { 'class': 'ca-u-card-text-title' }
})
export class CardTextTitleDirective {}
