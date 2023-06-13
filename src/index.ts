import { Application, Container, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,//640,
	height: 720//480
});

window.addEventListener("resize", ()=>{

	//Calculo las escalas de ancho y alto
	const scalex = window.innerWidth/app.screen.width; // Escala X
	const scaley = window.innerHeight/app.screen.height;  //Escala Y
	const scale = Math.min(scalex,scaley);
	//Calculo el ancho y alto de la pantalla de juego, ancho de la pantalla POR la scala
	const gameWidth = Math.round(app.screen.width*scale);
	const gameHeight = Math.round(app.screen.height*scale);
	//Calculo del margen, ancho de ventana total MENOS ancho de pantalla de juego
	const margenHorizontal = Math.floor((window.innerWidth-gameWidth) / 2);
	const margenVertical = Math.floor((window.innerHeight-gameHeight) / 2);
	//Establezcoel espaciop ara el ancho y alto de la pantalla de juego
	app.view.style.width = gameWidth +"px";
	app.view.style.height = gameHeight + "px",
	//Establezco los margenes
	app.view.style.marginLeft = margenHorizontal + "px";
	app.view.style.marginRight = margenHorizontal + "px";

	app.view.style.marginTop = margenVertical + "px";
	app.view.style.marginBottom = margenVertical + "px";
})
//Executo la arrow function resize para que el juego aparezca centrado 
window.dispatchEvent(new Event("resize"));

Loader.shared.add({url: "./dino.png", name: "myDino"});
Loader.shared.add({url: "./hat.png", name: "myHat"});


Loader.shared.onComplete.add(()=>{
const dino: Sprite = Sprite.from("myDino");
const hat: Sprite = Sprite.from("myHat");
//Escalo el gorro al 90% y seteo la posición de anclaje
hat.scale.set(0.9);
hat.position.set(110,-50);

//Creo el contenedor y agrego los sprites
const dinoWhitHat: Container = new Container();

dinoWhitHat.addChild(dino);
dinoWhitHat.addChild(hat);
 
dinoWhitHat.scale.set(0.7);
dinoWhitHat.position.set(300,200);
dinoWhitHat.angle = 15;
//Pongo la imagen en la pantalla o escenario

app.stage.addChild(dinoWhitHat);
});

Loader.shared.load();