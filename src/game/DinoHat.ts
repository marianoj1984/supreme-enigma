import { Container, Sprite } from "pixi.js";

export class DinoHat extends Container{

        constructor(){
            super();
            const dino: Sprite = Sprite.from("myDino");
            const hat: Sprite = Sprite.from("myHat");
            //Escalo el gorro al 90% y seteo la posición de anclaje
            hat.scale.set(0.9);
            hat.position.set(0,-50);
            hat.angle = -15;
            this.addChild(dino);
            this.addChild(hat);
            
        }
}