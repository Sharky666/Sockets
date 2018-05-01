import { Entity } from "./entities/entity";
export class World extends Entity {
    graphics = {
        position: {
            x: 0,
            y: 0
        },
        geometry: {
            shape: "rect",
            color: "blue",
            size: {
                width: 100,
                height: 100
            }
        },
        updated: false
    }
    constructor(){
        super();
    };
}