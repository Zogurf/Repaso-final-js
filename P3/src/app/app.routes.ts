import { Routes } from '@angular/router';
import { Asistencia } from './components/asistencia/asistencia';

export const routes: Routes = [
    {path: "asistencia/grupo/:tipo", component: Asistencia}
];
