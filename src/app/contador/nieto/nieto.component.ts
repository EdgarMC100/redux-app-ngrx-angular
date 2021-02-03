import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [],
})
export class NietoComponent implements OnInit {
  constructor() {}
  @Output() cambioContador = new EventEmitter<number>();
  @Input() contador: number | undefined;

  ngOnInit(): void {}

  reset() {
    this.contador = 0;
    this.cambioContador.emit(this.contador);
  }
}
