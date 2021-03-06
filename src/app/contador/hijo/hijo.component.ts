import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  @Input()
  contador: number;
  @Output() cambioContador = new EventEmitter<number>();
  // @Output()
  // cambioContador = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  multiplicar() {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }
  dividir() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  reset(nuevoValor) {
    this.contador = nuevoValor;
    this.cambioContador.emit(this.contador);
  }
}
