import { Application, Loader, Ticker } from 'pixi.js'
import { assets } from './assets';
//import { DinoHat } from './DinoHat';
//import { Scene } from './scenes/Scene';
//import {SceneUpdate } from './scenes/SceneUpdate';
import { Keyboard } from './utils/Keyboard';
//import { SceneDvd } from './scenes/SceneDvd';
//import { Player } from './game/Player';
import { TickerScene } from './scenes/TickerScene';

export const WIDTH = 1920;
export const HEIGHT =  1080;
const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x7ed9d2,
	/*backgroundColor: 0x6495ed,*/
	width: WIDTH,//640,
	height: HEIGHT//480
});

Keyboard.initialize();
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

Loader.shared.add(assets);


Loader.shared.onComplete.add(()=>{
/*Escena final de pantalla
const SceneComplete: Scene = new Scene();
app.stage.addChild(SceneComplete);*/

/*Escena para loop de eventos
const SceneDino: SceneUpdate = new SceneUpdate();
app.stage.addChild(SceneDino);*/

/*Escena dvd Tarea
const dvd = new SceneDvd();
app.stage.addChild(dvd);
Ticker.shared.add(function(deltaFrame){
	dvd.update(Ticker.shared.deltaMS, deltaFrame)
})

});*/
//Player
const player = new TickerScene();
app.stage.addChild(player);
Ticker.shared.add(function(deltaFrame){
	player.update(Ticker.shared.deltaMS, deltaFrame)
})

});

Loader.shared.load();


