import { Container, Sprite, Text } from "pixi.js";

export class LevelComplete extends Container{

    constructor(){
        super()
        const fondo: Sprite = Sprite.from("CajaFondo");
        fondo.scale.set(0.35);

        const CintaNaranja: Sprite = Sprite.from("CintaNaranja");
        CintaNaranja.scale.set(0.4);
        CintaNaranja.position.set(40,15)

        const EstrellaLlena: Sprite = Sprite.from("EstrellaLlena");
        EstrellaLlena.scale.set(0.35);
        EstrellaLlena.position.set(65,90);
        EstrellaLlena.angle = -30;

        const EstrellaVacia: Sprite = Sprite.from("EstrellaVacia");
        EstrellaVacia.scale.set(0.35);
        EstrellaVacia.position.set(210,30);

        const EstrellaVacia2: Sprite = Sprite.from("EstrellaVacia");
        EstrellaVacia2.scale.set(0.35);
        EstrellaVacia2.position.set(375,30);
        EstrellaVacia2.angle = 30;

        const Texto :Sprite = Sprite.from("CajaTexto");
        Texto.scale.set(0.9);
        Texto.position.set(35,220);

        const myPuntaje: Text = new Text("1256999 pts",{fontSize: 100, fill: 0xFF9900,fontFamily: "Comic Sans Serif MS"});
        myPuntaje.scale.set(0.45);
        myPuntaje.position.set(150,250);
        
        const myText: Text = new Text("¡NIVEL COMPLETADO!",{fontSize: 100, fill: 0xFF9900,fontFamily: "Comic Sans Serif MS"});
        myText.scale.set(0.45);
        myText.position.set(27,360);

        const Dinero: Sprite = Sprite.from("Dinero");
        Dinero.scale.set(0.35);
        Dinero.position.set(60,250);

        const FlechaRetorno: Sprite = Sprite.from("FlechaRetorno");
        FlechaRetorno.scale.set(0.35);
        FlechaRetorno.position.set(45,440);

        const FlechaSeguir: Sprite = Sprite.from("FlechaSeguir");
        FlechaSeguir.scale.set(0.35);
        FlechaSeguir.position.set(415,440);

        const Exit: Sprite = Sprite.from("Exit");
        Exit.scale.set(0.1);
        Exit.position.set(250,440);

        const Opcion: Sprite = Sprite.from("Opcion");
        Opcion.scale.set(0.1);
        Opcion.position.set(150,440);

        this.addChild(fondo);  
        this.addChild(CintaNaranja);
        this.addChild(EstrellaLlena);
        this.addChild(EstrellaVacia);
        this.addChild(EstrellaVacia2);
        this.addChild(Texto);
        this.addChild(Dinero);
        this.addChild(FlechaRetorno);
        this.addChild(FlechaSeguir);
        this.addChild(myPuntaje);
        this.addChild(myText);
        this.addChild(Exit);
        this.addChild(Opcion);

    }
}