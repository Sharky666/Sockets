import { Player } from './player';
import { World } from './world';

export class Game {
    canvas:HTMLCanvasElement = document.createElement('canvas'); 
    constructor() {
        this.injectCanvas()
    }
    injectCanvas(){
        document.body.appendChild(this.canvas);
    }
}

