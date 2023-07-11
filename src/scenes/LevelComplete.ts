import { Container, Sprite, Text, Texture } from "pixi.js";
import { Button } from "../ui/Button";
import { Icons } from "./Icons";
import { Keyboard } from "../utils/Keyboard";

export class LevelComplete extends Container{

    private EstrellaLlena: Icons;
    private EstrellaVacia: Icons;
    private EstrellaVacia2: Icons;
    private cajaTexto: Icons;
    private dinero: Icons;
    private flechaRetorno : Button;
    private flechaSeguir : Button;
    private botonOpcion : Button;
    private botonSalir : Button;

    constructor(){
        super()
        const fondo: Sprite = Sprite.from("CajaFondo");
        fondo.scale.set(0.35);

        const CintaNaranja: Sprite = Sprite.from("CintaNaranja");
        CintaNaranja.scale.set(0.4);
        CintaNaranja.position.set(40,15)
        //Evento de presionar mouse en estrella
        this.EstrellaLlena = new Icons(Texture.from("EstrellaLlena"), 0.35);
        this.EstrellaLlena.position.set(65,90);
        this.EstrellaLlena.angle = -30;
        /*
        EstrellaLlena.interactive = true;*/

        //Evento de presionar en pantalla touch
        this.EstrellaVacia = new Icons(Texture.from("EstrellaVacia"), 0.35);
        this.EstrellaVacia.position.set(210,30);
        /*EstrellaVacia.on("touchstart", this.onTouchStart, this);
        EstrellaVacia.on("touchend", this.onTouchEnd, this);
        EstrellaVacia.interactive = true;*/

        //Evento cuando se presiona Y/O se usa el mouse
        this.EstrellaVacia2 = new Icons(Texture.from("EstrellaVacia"), 0.35);
        this.EstrellaVacia2.position.set(375,30);
        this.EstrellaVacia2.angle = 30;
        /*EstrellaVacia2.on("pointerdown", this.onPointerDown, this);
        EstrellaVacia2.on("pointerup", this.onPointerUp, this);
        EstrellaVacia2.interactive = true;*/

        this.cajaTexto = new Icons(Texture.from("CajaTexto"), 0.9);
        //this.cajaTexto.scale.set(0.9);
        this.cajaTexto.position.set(35,220);

        const myPuntaje: Text = new Text("1256999 pts",{fontSize: 100, fill: 0xFF9900,fontFamily: "Comic Sans Serif MS"});
        myPuntaje.scale.set(0.45);
        myPuntaje.position.set(150,250);
        
        const myText: Text = new Text("¡NIVEL COMPLETADO!",{fontSize: 100, fill: 0xFF9900,fontFamily: "Comic Sans Serif MS"});
        myText.scale.set(0.45);
        myText.position.set(27,360);

        this.dinero = new Icons(Texture.from("Dinero"), 0.35);
        //this.dinero.scale.set(0.35);
        this.dinero.position.set(60,250);

        this.flechaRetorno = new Button(Texture.from("FlechaRetorno"),this.onButtonClick.bind(this));
        //this.flechaRetorno.scale.set(0.35);
        this.flechaRetorno.position.set(45,440);

        this.flechaSeguir = new Button(Texture.from("FlechaSeguir"),this.onButtonClick.bind(this));
        //this.flechaSeguir.scale.set(0.35);
        this.flechaSeguir.position.set(415,440);

        this.botonSalir = new Button(Texture.from("Exit"),this.onButtonClick.bind(this));
        this.botonSalir.scale.set(0.3);
        this.botonSalir.position.set(270,440);

        this.botonOpcion = new Button(Texture.from("Opcion"),this.onButtonClick.bind(this)); 
        this.botonOpcion.scale.set(0.3);
        this.botonOpcion.position.set(130,440);

        //document.addEventListener("keydown",this.onKeyDown.bind(this))

        Keyboard.down.on("KeyB", this.onKeyB, this);
        Keyboard.up.on("KeyB", this.onKeyBUp, this);

        this.addChild(fondo);  
        this.addChild(CintaNaranja);
        this.addChild(this.EstrellaLlena);
        this.addChild(this.EstrellaVacia);
        this.addChild(this.EstrellaVacia2);
        this.addChild(this.cajaTexto);
        this.addChild(this.dinero);
        this.addChild(this.flechaSeguir);
        this.addChild(this.flechaRetorno);
        this.addChild(myPuntaje);
        this.addChild(myText);
        this.addChild(this.botonSalir);
        this.addChild(this.botonOpcion);

    }

    private onButtonClick():void{
        console.log("Activada la función!", this);
    }

    /*private onKeyDown(e:KeyboardEvent): void{
        console.log("tecla presionada", e.code);
    }*/
    private onKeyB() : void{
        console.log("Apreté la B", this);
    }
    private onKeyBUp() : void{
        console.log("Solté la B", this);
    }
    /*private onTouchStart(): void{
        console.log("Se presionó la pantalla");
    }
    private onTouchEnd(): void{
        console.log("Se levanto el dedo :D");
    }
    private onPointerDown(): void{
        console.log("Se presionó la Estrella");
    }
    private onPointerUp(): void{
        console.log("Se soltó :D");
    }*/
}