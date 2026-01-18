import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
 export class AppComponent implements AfterViewInit /*implements OnInit, AfterViewInit*/ {
    appBgColor = 'purple';
    @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.divEl.nativeElement.style.backgroundColor = 'brown';
    this.divEl.nativeElement.textContent = 'Sou uma div';
    this.divEl.nativeElement.classList.add('minha-classe');
  }






  // constructor() {
  //   console.log('constructor');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit', this.meuInputEl);
  //   console.log('meuButton', this.buttonsEl);
  //   this.meuInputEl.nativeElement.focus();
  //   console.log(this.buttonsEl.toArray());
  //   this.buttonsEl.toArray()[0].nativeElement.style.backgroundColor = 'green';

  //   this.buttonsEl.changes.subscribe((result) => {
  //     console.log('changes', result);
  //   });
  // }

  // ngOnInit() {
    // console.log('ngOnInit', this.meuInputEl);
    // this.meuInputEl.nativeElement.focus();
  // }

  // buttonList = [ 'Botão_1', 'Botão_2', 'Botão_2' ];

  // @ViewChildren('meuButton') buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

  // changeColor(elementButton: Event) {
  //   console.log(elementButton);
  //   const btn = elementButton.target as HTMLButtonElement;
  //   btn.style.backgroundColor = 'red';
  //   btn.style.color = 'white';
  // }

  // resetButtons() {
  //   this.buttonsEl.forEach((btnEl) => {
  //     console.log(btnEl);
  //     btnEl.nativeElement.style.backgroundColor = '';
  //     btnEl.nativeElement.style.color = '';
  //   });
  // }

  // firstItem() {
  //   const primeiroButton = this.buttonsEl.get(0)!;
  //   console.log(primeiroButton);
  //   primeiroButton.nativeElement.style.backgroundColor = 'purple';

  //   const primeiroFindClass = this.buttonsEl.find((btnEl) => btnEl.nativeElement.className === 'btn-1')!;
  //   primeiroFindClass.nativeElement.style.backgroundColor = 'red';

  //   const primeiroToArray = this.buttonsEl.toArray()[2]!;
  //   primeiroToArray.nativeElement.style.backgroundColor = 'blue';
  //   primeiroToArray.nativeElement.style.color = 'white';
  // }

  // removeItem() {
  //   this.buttonList.shift();
  // }


  // constructor(private _cdRef: ChangeDetectorRef) {}

  // changeDetection() {
  //   this._cdRef.detectChanges();
  // }

  // teste = 'Kuririn';

  // clicou(input: HTMLInputElement) {
  //   console.log(input.value);

  //   input.value = 'Atualizado';
  // }

  // @ViewChild('meuInput', { static: true }) meuInputEl!: ElementRef<HTMLInputElement>;
  // @ViewChild('meuInput') meuInputEl!: ElementRef<HTMLInputElement>;

  // @ViewChild('minhaDiv') minhaDivEl!: ElementRef<HTMLDivElement>;

  // @ViewChild('filhoComponente') filhoCompRef!: FilhoComponent;
  // @ViewChild(FilhoComponent) filhoCompClass!: FilhoComponent;

  // updateInputText() {
  //   console.log(this.meuInputEl);
  //   this.meuInputEl.nativeElement.value = 'Kuririn';
  // }

  // focusElementInput() {
  //   this.meuInputEl.nativeElement.focus();
  // }

  // updateContent() {
  //   this.minhaDivEl.nativeElement.textContent = 'Kuririn';
  // }

  // sayHello() {
  //   this.filhoCompRef.sayHello();
  // }

  // sayHello_2() {
  //   this.filhoCompClass.sayHello();
  // }
}

// const funcaoPai = () => {
//   let pai = 'pai';

//   const funcaoFilha = () => {
//     let filha = 'filha';
//     pai = 'pai_2';

//     const funcaoNeto = () => {
//       filha = 'Filha_2';
//       pai = 'pai_3';
//     }
//   }
// }
