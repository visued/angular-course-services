import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CursosServices } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [
    CriarCursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CriarCursoComponent],
  providers: [CursosServices],
})
export class CriarCursoModule { }
