import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';


@Injectable()
export class CursosServices {

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Python', 'React Native', 'React Redux'];    
    
    constructor(private logService: LogService) {}
    getCursos() {
        this.logService.consoleLog('Enviando uma mensagem de log atraves do servico criado!');
        return this.cursos;
    }

    addCurso(curso: string) {
        this.logService.consoleLog(`Criando um novo curso: ${curso}`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosServices.criouNovoCurso.emit(curso);
    }

}