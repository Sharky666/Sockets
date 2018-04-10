import { Entity } from "./entities/entity";

export class Player extends Entity {
    public name: string = "Static";
    constructor() {
        super();
    }
    graphics = {
        position: {
            x: 5,
            y: 10
        },
        geometry:{
            shape: 'rectangle',
            color: 'red',
            size: {
                width: 20,
                height: 20
            }
        }
    }
}