import { Component, OnInit } from '@angular/core';

import { CursosServices }  from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosService: CursosServices;

  constructor() { 
    this.cursosService = new CursosServices();
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
