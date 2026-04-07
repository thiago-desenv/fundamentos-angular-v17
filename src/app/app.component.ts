import { TesteService } from './services/teste.service';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';
import { UserStatus } from './enums/user-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: './ng-if/ex1.html',
  styleUrls: ['./app.component.scss']
})
 export class AppComponent implements OnInit /*,AfterViewInit*/ {
  // minhaData: string = '2023-10-21T21:00:00.000Z';

  // minhaDataObj: Date = new Date('2023-10-21T21:00:00.000Z');

  ngOnInit(): void {

    // console.log('Data convertida para região: ', new Date(this.minhaData));
    // console.log('Data UTC-0: ', new Date(this.minhaData).toUTCString());

    // console.log('Timestamp', new Date(this.minhaData).getTime());

    // console.log(this.minhaDataObj);
  }

  // pessoa = {
  //   nome: 'Kuririn',
  //   idade: 1,
  //   status: UserStatus.INATIVO
  // };


  // condition: boolean = true;
  // appBgColor = 'purple';
  // @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;

  // constructor(
  //   private readonly _elRef: ElementRef,
  //   private readonly _testeService: TesteService
  // ) { }

  // ngOnInit() {
  //   console.log(this._elRef);
  //   console.log(this._elRef.nativeElement);
  //   // const divEl = this._elRef.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement;

  //   let textDiv = 'Sou a outra div';

  //   // divEl.textContent = textDiv;
  //   // divEl.style.backgroundColor = 'blue';
  //   // divEl.style.color = 'white';
  //   // divEl.style.marginTop = '2px';
  //   // divEl.addEventListener('click', () => { alert(textDiv) });
  //   // console.log(divEl);
  //   // this._testeService.create(this._elRef);
  // }

  // ngAfterViewInit() {
  //   //this.divEl.nativeElement.style.backgroundColor = 'brown';
  //   // this.divEl.nativeElement.textContent = 'Sou uma div';
  //   // this.divEl.nativeElement.classList.add('minha-classe');
  // }

  // createElement() {
  //   const novaDiv = document.createElement('div');
  //   novaDiv.textContent = 'Nova div';
  //   novaDiv.classList.add('bg-red');
  //   this._elRef.nativeElement.appendChild(novaDiv);
  // }






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
