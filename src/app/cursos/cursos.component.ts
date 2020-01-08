import { Component, OnInit } from '@angular/core';

import { CursosServices } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosServices],
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private _cursosService: CursosServices) {
    //this.cursosService = new CursosServices();
    // this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();


    CursosServices.criouNovoCurso.subscribe((cursoEnviado: string) => {
      this.cursos.push(cursoEnviado);
    });
  }

}
