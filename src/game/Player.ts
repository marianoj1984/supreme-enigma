import { AnimatedSprite, Graphics, ObservablePoint, Rectangle, Texture } from "pixi.js";
import { PhisicsContainer } from "./PhisicsContainer";
import { Keyboard } from "../utils/Keyboard";
import { IHitbox } from "./IHitbox";

export class Player extends PhisicsContainer implements IHitbox{
    
    
    private dinoAnimated : AnimatedSprite; 
    private static readonly  GRAVITY = 150;
    private static readonly MOVE_SPEED = 350;
    public canJump = true;
    private heatbox: Graphics;

    constructor(){
        super();
        this.dinoAnimated = new AnimatedSprite([
            Texture.from("DinoRun1"),
            Texture.from("DinoRun2"),
            Texture.from("DinoRun3"),
            Texture.from("DinoRun4"),
            Texture.from("DinoRun5"),
            Texture.from("DinoRun6"),
            Texture.from("DinoRun7"),
        ], false
        );
        this.dinoAnimated.anchor.set(0.3,1);
        //this.dinoAnimated.scale.set(0.35);
        this.dinoAnimated.play();
        this.dinoAnimated.animationSpeed = 0.2;
        this.addChild(this.dinoAnimated);

        const auxZero : Graphics = new Graphics();
        auxZero.beginFill(0xff00ff);
        auxZero.drawCircle(0,0,10);
        auxZero.endFill();
        this.addChild(auxZero);

        this.heatbox = new Graphics();
        this.heatbox.beginFill(0xff00ff, 0.3);
        this.heatbox.drawRect(0,0,250,350);
        this.heatbox.endFill();
        this.heatbox.x = -125;
        this.heatbox.y = -400;
        this.dinoAnimated.addChild(this.heatbox);

        this.acceleration.y = Player.GRAVITY;
        Keyboard.down.on("ArrowUp", this.jump, this )

    }   

    public override destroy(options : any) {
        super.destroy(options);
        Keyboard.down.off("ArrowUp", this.jump);
    }

    public override update(deltaMS : number): void {
        super.update(deltaMS/1000);
        this.dinoAnimated.update(deltaMS/ (1000/60));

        if(Keyboard.state.get("ArrowRight")){
            this.speed.x = Player.MOVE_SPEED;
            this.dinoAnimated.scale.x = 1;
        }else if(Keyboard.state.get("ArrowLeft")){
            this.speed.x = -Player.MOVE_SPEED;
            this.dinoAnimated.scale.x = -1;
        }else{
            this.speed.x = 0;
        }

        /*if(Keyboard.state.get("ArrowUp") && this.canJump){
            this.jump();
        }*/
    }
    private jump() : void{
        if(this.canJump){
            this.canJump = false;
            this.speed.y = -350;
        }
    }

    public getHitbox() : Rectangle{
        return this.heatbox.getBounds();
    }
    public separate(overlap: Rectangle, platform: ObservablePoint<any>) {
        if(overlap.width < overlap.height){

            if(this.x > platform.x){

                this.x += overlap.width;  

            }else if(this.x < platform.x) {

                this.x -= overlap.width;     

            }
           
        }
    else{
        if(overlap.width > overlap.height){

            if(this.y > platform.y){

            this.y -= overlap.height; 
            this.speed.y = 0; 
            this.canJump = true;

            }else if(this.y < platform.y) {

            this.y += overlap.height;     

            }
           
        }
    }
    }
}