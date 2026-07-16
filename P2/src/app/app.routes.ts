import { Routes } from '@angular/router';
import { Numeros } from './components/numeros/numeros';

export const routes: Routes = [
    {path: "numeros/vista/:tipo", component: Numeros},
];
