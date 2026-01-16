import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: '[appListener]'
})
export class ListenerDirective {
  @HostListener('click') onClick() {
    console.log('Clicado');
  }

  @HostListener('keyup', ['$event', '"Meu argumento"']) onKeyup(event: KeyboardEvent, param2: string) {
    console.log('Digitou', event);
    console.log('Param2', param2);
    const valueTextInput = (event.target as HTMLInputElement).value;
    console.log('Valor digitado', valueTextInput);
  }
}
