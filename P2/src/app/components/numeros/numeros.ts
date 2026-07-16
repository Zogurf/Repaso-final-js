import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-numeros',
  imports: [CommonModule],
  templateUrl: './numeros.html',
  styleUrl: './numeros.css',
})

export class Numeros {
  vistaActual = "";

  numeros = [14, 25, 8, 43, 12, 5, 22]

  promedio() {
    let promedio = this.numeros.reduce((acum, n) => acum + n, 0) / this.numeros.length

    return promedio
  }

  constructor(private ruta: ActivatedRoute) {
    ruta.params.subscribe(parametro => {
      this.vistaActual = parametro["tipo"]
    })
  }
}
