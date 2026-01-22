import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})
export class XssComponent implements AfterViewInit {
  constructor(
    private readonly _elRef: ElementRef,
    private readonly _renderer2: Renderer2
  ) {}

  ngAfterViewInit(): void {

  }

  copyValue(value: string) {
    const div = document.createElement('div');
    // div.textContent = value;
    div.innerHTML = value;
    this._elRef.nativeElement.appendChild(div);
  }

  copyValueCorrect(value: string) {
    const divEl = this._renderer2.createElement('div') as HTMLDivElement;
    const text = this._renderer2.createText(value);
    this._renderer2.appendChild(divEl, text);
    this._renderer2.setStyle(divEl, 'backgroundColor', 'red');
    this._renderer2.setStyle(divEl, 'color', 'white');
    this._renderer2.appendChild(this._elRef.nativeElement, divEl);
  }
}
