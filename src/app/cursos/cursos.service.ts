import { Injectable } from '@angular/core';


@Injectable()
export class CursosServices {
        
    getCursos() {
        return ['Angular 2', 'Python', 'React Native', 'React Redux'];
    }

}