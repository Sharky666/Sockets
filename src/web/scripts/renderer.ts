import { Drawable } from './models/drawable';

export class Renderer {
    constructor(private ctx: CanvasRenderingContext2D) {}

    render(drawables: Drawable[]){
        drawables.forEach(d => {
            if (d.geometry) {
                switch (d.geometry.shape){
                    case 'rectangle':
                        this.ctx.fillStyle = d.geometry.color;
                        this.ctx.fillRect(d.position.x, d.position.y, d.geometry.size.width, d.geometry.size.height);
                };
            }
        });

    }
}