import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Injectable()
export class CursosServices {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    cursos: string[] = ['Angular 2', 'Python', 'React Native', 'React Redux'];    
    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosServices.criouNovoCurso.emit(curso);
    }

}