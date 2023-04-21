import { Component } from '@angular/core';

@Component({
  selector: 'app-ejerciciouno',
  templateUrl: './ejerciciouno.component.html',
  styleUrls: ['./ejerciciouno.component.scss'],
})
export class EjerciciounoComponent {
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
