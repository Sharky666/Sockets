import { Drawable } from './models/drawable';

export class Renderer {
    constructor(private ctx: CanvasRenderingContext2D) {}

    clear(){
        this.ctx.clearRect(0, 0, 900, 900);//TODO: use thef canvas size.
    }

    render(drawables: Drawable[]){
        drawables.forEach(d => {
            if (d.geometry) {
                switch (d.geometry.shape){
                    case 'rectangle':
                    case 'rect':
                        this.ctx.fillStyle = d.geometry.color;
                        this.ctx.fillRect(d.position.x, d.position.y, d.geometry.size.width, d.geometry.size.height);
                };
            }
            if (d.children){
                this.render(d.children);
            };
        });

    }
}