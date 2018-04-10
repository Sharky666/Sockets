import { Player } from './player';
import { World } from './world';
import { Renderer } from './renderer';

export class Game {
    canvas:HTMLCanvasElement = document.createElement('canvas');
    private renderer: Renderer;
    constructor() {
        this.injectCanvas();
        this.renderer = new Renderer(this.canvas.getContext('2d'));
        this.loop();
    }
    injectCanvas(){
        document.body.appendChild(this.canvas);
    }
    loop(){
        let p = new Player();
        this.renderer.render([p.graphics]);
    }
}
