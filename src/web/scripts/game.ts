import { Player } from './player';
import { World } from './world';
import { Renderer } from './renderer';

export class Game {
    player = new Player();
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
    loop = () => {
        //TODO: limit to 60FPS.
        this.renderer.clear();
        this.player.graphics.position.x += 1;
        this.renderer.render([this.player.graphics]);
        window.requestAnimationFrame(this.loop);
    }
}
