//import { AnimatedSprite, Container, Graphics, Texture, Text } from "pixi.js";
//import { DinoHat } from "./DinoHat";
import { Container } from "pixi.js";
import { LevelComplete } from "./LevelComplete";

export class Scene extends Container{

    constructor(){
        //Llamo al constructor de "Container"
        super();
        const pantallaFondo: LevelComplete = new LevelComplete();
        pantallaFondo.position.set(300,100)
        this.addChild(pantallaFondo);
        /*//Creo imagen estatica
        const dinoWhitHat: DinoHat = new DinoHat();
        dinoWhitHat.scale.set(0.7);
        dinoWhitHat.position.set(300,200);
        //Pongo la imagen en la pantalla o escenario
        
        this.addChild(dinoWhitHat);

        //Creo imagen dinámica
        const dinoAnimated: AnimatedSprite = new AnimatedSprite([
            Texture.from("DinoRun1"),
            Texture.from("DinoRun2"),
            Texture.from("DinoRun3"),
            Texture.from("DinoRun4"),
            Texture.from("DinoRun5"),
            Texture.from("DinoRun6"),
            Texture.from("DinoRun7"),
        ], true
        );
        dinoAnimated.play();
        dinoAnimated.animationSpeed = 0.35;
        this.addChild(dinoAnimated);

        //Creo forma y figuras en pantalla
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
}
