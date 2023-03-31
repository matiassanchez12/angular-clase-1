import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  edadUno: string = '';
  edadDos: string = '';

  suma: number = 0;
  promedio: number = 0;

  calcularSuma() {
    if (!this.isNumeric(this.edadDos) || !this.isNumeric(this.edadUno)) {
      return;
    }

    this.suma = Number(this.edadUno) + Number(this.edadDos);
  }

  calcularPromedio() {
    if (!this.isNumeric(this.edadDos) || !this.isNumeric(this.edadUno)) {
      return;
    }

    this.promedio = Number(this.edadUno) + Number(this.edadDos) / 2;
  }

  limpiar() {
    this.edadDos = '';
    this.edadUno = '';
  }

  isNumeric(value: string) {
    return /^-?\d+$/.test(value);
  }
}
