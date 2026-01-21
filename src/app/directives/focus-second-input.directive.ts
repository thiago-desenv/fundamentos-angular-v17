import { Directive, HostBinding, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFocusSecondInput]'
})
export class FocusSecondInputDirective implements AfterViewInit {
  // @HostBinding('style.backgroundColor') bgColor = 'blue';
  // @HostBinding('style.color') color = 'white';
  // @HostBinding('style.MarginTop.px') marginTop = '2';
  // @HostBinding('textContent') text = 'Sou uma div';

  constructor(private readonly _elRef: ElementRef) { }

  ngAfterViewInit(): void {
    console.log('elRef', this._elRef);

    const inputList = this._elRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];
    console.log(inputList);

    if(inputList.length > 1) {
      inputList[1].focus();
    }
  }
}
