import { Player } from './player';
import { World } from './world';
import { Renderer } from './renderer';

export class Game {
    player = new Player();
    world = new World();
    canvas:HTMLCanvasElement = document.createElement('canvas');
    private renderer: Renderer;
    test: any;
    constructor() {
        this.injectCanvas();
        this.renderer = new Renderer(this.canvas.getContext('2d'));
        this.initialize();
        this.loop();
    }
    initialize(){
        this.world.addChild(this.player);
        this.test = this.world.getGraphics();
    }
    injectCanvas(){
        document.body.appendChild(this.canvas);
    }
    loop = () => {
        //TODO: limit to 60FPS.
        this.renderer.clear();
        this.player.graphics.position.x += 1;
        this.renderer.render([this.test]);
        // this.renderer.render([this.player.graphics]);
        window.requestAnimationFrame(this.loop);
    }
}
