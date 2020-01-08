import { Component, OnInit } from '@angular/core';
import { CursosServices } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string;
  constructor(private _cursosService: CursosServices) { }

  ngOnInit() {
    this._cursosService.emitirCursoCriado.subscribe((cursoCriado: string) => {
      this.curso = cursoCriado;
    });
  }

}
