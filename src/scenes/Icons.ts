import { Container, Sprite, Texture } from "pixi.js";

export class Icons extends Container{

    private def:Texture;
    private spr:Sprite;
    private scl:number;
    constructor(def:Texture, scl:number){
        super()
        this.def = def;
        this.scl = scl;
        this.spr = Sprite.from(this.def);
        this.spr.scale.set(this.scl);
        this.addChild(this.spr);
    };
}
