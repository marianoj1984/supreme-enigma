import { Container, Graphics, Rectangle, Sprite } from "pixi.js";
import { IHitbox } from "./IHitbox";

export class Platform extends Container implements IHitbox{
    heatbox: Graphics;

    constructor(){
        super();
        const spr = Sprite.from("Platform");
        spr.scale.set(0.5);
        this.addChild(spr);

        this.heatbox = new Graphics();
        this.heatbox.beginFill(0x00ff00, 0.3);
        this.heatbox.drawRect(10,15,430,105);
        this.heatbox.endFill();
        
        this.addChild(this.heatbox);
    }
    public getHitbox() : Rectangle{
        return this.heatbox.getBounds();
    }
}