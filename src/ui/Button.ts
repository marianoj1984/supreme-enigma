import { Container, Sprite, Texture } from "pixi.js";

export class Button extends Container{

    private def:Texture;
    private callback:Function;
    private spr:Sprite;

    constructor(def:Texture, callback:Function){

        super();
        this.def=def;
        this.callback=callback;

        this.spr=Sprite.from(this.def);
        this.spr.scale.set(0.35);
        //this.spr.position.set(65,90);
        //this.spr.angle = -30;
        this.spr.on("pointerdown", this.onMouseDown, this);
        this.spr.on("pointerup", this.onMouseUp, this);
        this.spr.on("pointerover", this.onMouseOver,this);
        this.spr.on("pointerout", this.onMouseOut,this);

        this.addChild(this.spr);

        this.spr.interactive = true;
    }

    private onMouseDown(): void{
        this.spr.scale.set(0.29);
    }
    private onMouseUp(): void{
        this.spr.scale.set(0.35);
        this.callback();
    }
    private onMouseOver():void{
        this.spr.scale.set(0.33);
    }
    private onMouseOut():void{
        this.spr.scale.set(0.35);
    }
}