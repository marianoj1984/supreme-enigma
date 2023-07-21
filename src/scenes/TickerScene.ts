import {   Container, Sprite,    } from "pixi.js";
//import { PhisicsContainer } from "../game/PhisicsContainer";
import { IUpdateable, } from "./IUpdateable";
import { WIDTH, HEIGHT } from "..";
import { Player } from "../game/Player";
import { Platform } from "../game/Platform";
import { checkCollision } from "../game/IHitbox";
//import { Keyboard } from "../utils/Keyboard";

export class TickerScene extends Container implements IUpdateable{
    
    private playerDino : Player;
    private bg : Sprite;
    private platforms: Platform[];
    constructor(){
        super();

        this.bg = Sprite.from("bg");
        this.bg.position.set(-500,0);
        this.bg.scale.set(0.42);
        this.platforms = new Array();// =[] es lo mismo

        const plat1 = new Platform();
        plat1.position.set(190,750);
        this.platforms.push(plat1);
        const plat2 = new Platform();
        plat2.position.set(1150,750);
        this.platforms.push(plat2);

        this.playerDino = new Player();

        this.addChild(this.bg);
        this.addChild(this.platforms[0]);
        this.addChild(this.platforms[1]);
        this.addChild(this.playerDino);


    }

    //Implementación de interface
    update(deltatime: number, _deltaFrame: number): void {
        this.playerDino.update(deltatime);
        
        for(let platform of this.platforms){
            //console.log(checkCollision(this.playerDino, platform));
            const overlap = checkCollision(this.playerDino, platform);
            if(overlap!=null){

                this.playerDino.separate(overlap, platform.position);
                
            }
        }
        
        
        if(this.playerDino.x > WIDTH){
            this.playerDino.x = WIDTH;

        }else if(this.playerDino.x<0){
            this.playerDino.x = 0;
        }
        if(this.playerDino.y>HEIGHT){
            this.playerDino.y=HEIGHT;
            this.playerDino.canJump = true;

        }else if(this.playerDino.y<0){
            this.playerDino.y=0;
            this.playerDino.speed.y = Math.abs(this.playerDino.speed.y);

        }
    }

 
}