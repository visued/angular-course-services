import { Component, OnInit } from '@angular/core';
import { CursosServices } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosServices],
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  constructor(private _cursosService: CursosServices) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
  }

  onAddCurso(curso: string) {
    this._cursosService.addCurso(curso);
  }
}
