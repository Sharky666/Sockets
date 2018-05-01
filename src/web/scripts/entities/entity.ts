import {Drawable} from '../models/drawable';
export abstract class Entity {
    children: Entity[] = [];
    abstract graphics: Drawable;
    addChild(child: Entity){
        // Add child graphics to our own graphics object
        if (!this.graphics.children) {
            this.graphics.children = [];
        }
        this.graphics.children.push(child.getGraphics());
        // Add the child entity object to the children list
        this.children.push(child);
    }
    getGraphics(){
        return this.graphics;
    };
}