import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-asistencia',
  imports: [CommonModule],
  templateUrl: './asistencia.html',
  styleUrl: './asistencia.css',
})
export class Asistencia {
  vistaActual = "";

  alumnos = [
    { nombre: "Juan", horaIngreso: "08:05", estado: "tarde", curso: "teoria" },
    { nombre: "Ana", horaIngreso: "07:55", estado: "presente", curso: "teoria" },
    { nombre: "Juan", horaIngreso: "08:05", estado: "tarde", curso: "laboratorio" }
  ]

  calcularTardanzas() {
    let tardanzas = this.alumnos.filter(alumno => alumno.estado == "tarde");
    let totalTarde = tardanzas.length;

    if (totalTarde / tardanzas.length > 0.3) {
     return "Las tardanzas superan mas del 30% del grupo"
    } else {
     return "Las tardanzas no superan mas del 30% del grupo"
    }
  }

  constructor(private ruta: ActivatedRoute) {
    ruta.params.subscribe(parametro => this.vistaActual = parametro["tipo"])
  }
}
