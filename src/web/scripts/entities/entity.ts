import {Drawable} from '../models/drawable';
export abstract class Entity {
    children: Entity[];
    abstract graphics: Drawable;
}