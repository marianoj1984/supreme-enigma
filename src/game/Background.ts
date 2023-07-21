import { Container, Sprite } from "pixi.js";

export class Background extends Container{
    private bg : Sprite;
    constructor(){
        super()
        this.bg = Sprite.from("bg");
        this.addChild(this.bg);
    }
}