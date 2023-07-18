import { AnimatedSprite, Container,  Texture, Ticker, } from "pixi.js";
import { Keyboard } from "../utils/Keyboard";
//import { DinoHat } from "../game/DinoHat";


export class SceneUpdate extends Container{
    private dinoAnimated : AnimatedSprite ;
    constructor(){
        //Llamo al constructor de "Container"
        super();
        //Creo imagen estatica
        /*const dinoWhitHat: DinoHat = new DinoHat();
        dinoWhitHat.scale.set(0.7);
        dinoWhitHat.position.set(300,200);
        //Pongo la imagen en la pantalla o escenario
        
        this.addChild(dinoWhitHat);*/

        //Creo imagen dinámica
        this.dinoAnimated = new AnimatedSprite([
            Texture.from("DinoRun1"),
            Texture.from("DinoRun2"),
            Texture.from("DinoRun3"),
            Texture.from("DinoRun4"),
            Texture.from("DinoRun5"),
            Texture.from("DinoRun6"),
            Texture.from("DinoRun7"),
        ], true
        );
        this.dinoAnimated.scale.set(0.35);
        this.dinoAnimated.play();
        this.dinoAnimated.animationSpeed = 0.2;
        this.addChild(this.dinoAnimated);

        Ticker.shared.add(this.update, this);

        
        /*Creo forma y figuras en pantalla
        const myGraph: Graphics = new Graphics();
        myGraph.lineStyle({color: 0xFF00FF, width:10, alpha:1});
        myGraph.lineTo(0,0);
        myGraph.lineTo(300,500);
        myGraph.lineTo(300,100);
        myGraph.lineTo(0,0);
        myGraph.position.set(1280/2,720/2);
        this.addChild(myGraph);

        myGraph.clear();

        myGraph.lineStyle({color: 0xFF00FF, width:10, alpha:1}); 
        myGraph.beginFill(0x00FF00, 1);
        myGraph.drawCircle(0,0,100);
        myGraph.endFill();
        myGraph.drawCircle(50,50,100);
        this.addChild(myGraph);

        myGraph.clear();

        myGraph.lineStyle({color: 0xFF00FF, width:10, alpha:1});
        myGraph.beginFill(0xABCDEF, 1);
        myGraph.drawRect(0,0, 400,200);
        myGraph.endFill();
        myGraph.drawRect(50,50,400,200);
        this.addChild(myGraph);

        //Mostrar TEXTO en pantalla

        const myText: Text = new Text("Hello World!",{fontSize: 100, fill: 0x00FFFFF,fontFamily: "Comic Sans Serif MS"});
        myText.position.set(1280/3,720/4);
        myText.angle = 25;
        myText.scale.set(1.5);
        this.addChild(myText);

        //Nine-Slice-Plane*/
    }
    private update(deltaFrame:number){
    
        this.dinoAnimated.update(deltaFrame);
        if(Keyboard.state.get("KeyA")){
            this.dinoAnimated.x+=10;
            console.log("presionaste la A");
        }
    }
    
}
