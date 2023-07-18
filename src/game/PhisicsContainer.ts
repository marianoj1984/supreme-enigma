import { Container, Point } from "pixi.js";

export class PhisicsContainer extends Container{

    public speed : Point = new Point();

    public update(deltaSeconds : number){
        this.x += this.speed.x*deltaSeconds;
        this.y += this.speed.y*deltaSeconds;
    }

}