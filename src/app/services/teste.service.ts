import { ElementRef, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  create(elRef: ElementRef) {
    const novaDiv = document.createElement('div');
    novaDiv.textContent = "Sou a nova div do teste service";
    novaDiv.classList.add('bg-red');

    elRef.nativeElement.appendChild(novaDiv);
  }
}
