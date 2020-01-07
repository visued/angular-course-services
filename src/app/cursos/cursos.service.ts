import { Injectable } from '@angular/core';


@Injectable()
export class CursosServices {
    cursos: string[] = ['Angular 2', 'Python', 'React Native', 'React Redux'];    
    getCursos() {
        return this.cursos;
    }

    addCurso(curso: string) {
        this.cursos.push(curso);
    }

}