import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})
export class XssComponent implements AfterViewInit {
  constructor(private readonly _elRef: ElementRef) {}

  ngAfterViewInit(): void {

  }

  copyValue(value: string) {
    const div = document.createElement('div');
    // div.textContent = value;
    div.innerHTML = value;
    this._elRef.nativeElement.appendChild(div);
  }
}
