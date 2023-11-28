// Olivia Etchegaray 93537/0
// Cuento: "La Cenicienta" Charles Perrault 
// Juego PONG
// Video YT:


// clases
let historia;
let pj = [];
let img = [];
let textos = [];

function setup() {
  createCanvas(600, 600);
  historia = new Historia(img, pj, textos);
}

function draw() {

  historia.mostrar();
}

function preload() {

  for (let n = 0; n < 19; n++) {
    img[n] = loadImage('libraries/img/i' + n + '.jpg');
  }
  
  textos = loadStrings('libraries/textos.txt');

} 

function mousePressed() {
  historia.cambiarPantalla("1"); // momentaneo para hacer funcionar estados 
}
