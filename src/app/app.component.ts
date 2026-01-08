import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // constructor(private _cdRef: ChangeDetectorRef) {}

  // changeDetection() {
  //   this._cdRef.detectChanges();
  // }

  // teste = 'Kuririn';

  // clicou(input: HTMLInputElement) {
  //   console.log(input.value);

  //   input.value = 'Atualizado';
  // }

  @ViewChild('meuInput') meuInputEl!: ElementRef<HTMLInputElement>;

  @ViewChild('minhaDiv') minhaDivEl!: ElementRef<HTMLDivElement>;

  @ViewChild('filhoComponente') filhoCompRef!: FilhoComponent;
  @ViewChild(FilhoComponent) filhoCompClass!: FilhoComponent;

  updateInputText() {
    console.log(this.meuInputEl);
    this.meuInputEl.nativeElement.value = 'Kuririn';
  }

  focusElementInput() {
    this.meuInputEl.nativeElement.focus();
  }

  updateContent() {
    this.minhaDivEl.nativeElement.textContent = 'Kuririn';
  }

  sayHello() {
    this.filhoCompRef.sayHello();
  }

  sayHello_2() {
    this.filhoCompClass.sayHello();
  }
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
