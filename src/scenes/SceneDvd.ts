import { AnimatedSprite,  Container,  Texture,  } from "pixi.js";
import { PhisicsContainer } from "../game/PhisicsContainer";
import { IUpdateable, } from "./IUpdateable";
import { WIDTH, HEIGHT } from "..";
//import { Keyboard } from "../utils/Keyboard";

export class SceneDvd extends Container implements IUpdateable{
    
    private logoDvd : AnimatedSprite;
    private phisDvd : PhisicsContainer;
    constructor(){
        super();
        this.logoDvd = new AnimatedSprite([
            Texture.from("dvd")],
            false);
        this.logoDvd.scale.set(0.2);
        this.logoDvd.play();
        
        this.phisDvd = new PhisicsContainer();
        this.addChild(this.phisDvd)
        this.phisDvd.speed.x=180;
        this.phisDvd.speed.y=80;
        this.phisDvd.addChild(this.logoDvd);

    }

    //Implementación de interface
    update(deltatime: number, deltaFrame: number): void {
        this.logoDvd.update(deltaFrame);
        const dt = deltatime/1000;
        this.phisDvd.update(dt);
        if(this.phisDvd.x > WIDTH-490){
            this.phisDvd.x = WIDTH-490;
            this.phisDvd.speed.x = Math.abs(this.phisDvd.speed.x) * -1;
            this.logoDvd.tint = 0xFF00FF 
        }else if(this.phisDvd.x<0){
            this.phisDvd.x = 0;
            this.phisDvd.speed.x = Math.abs(this.phisDvd.speed.x);
            this.logoDvd.tint = 0xFFFF00
        }
        if(this.phisDvd.y>HEIGHT-290){
            this.phisDvd.y=HEIGHT-290;
            this.phisDvd.speed.y = Math.abs(this.phisDvd.speed.y) * -1;
            this.logoDvd.tint = 0x00FFFF
        }else if(this.phisDvd.y<0){
            this.phisDvd.y=0;
            this.phisDvd.speed.y = Math.abs(this.phisDvd.speed.y);
            this.logoDvd.tint = 0xF00F0F
        }
    }

 
}