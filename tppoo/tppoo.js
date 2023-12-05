// Olivia Etchegaray 93537/0
// Cuento: "La Cenicienta" Charles Perrault 
// Juego PONG
// Video YT:


// clases
let historia; // aventura
let juego; // juego 
let png = [];
let img = [];
let textos = [];

function setup() {
  createCanvas(600, 600);
  historia = new Historia(img, png, textos);
  juego = new Juego();
}

function draw() {

  historia.mostrar(img, textos);
}

function preload() {

  for (let i= 0; i< 23; i++) {
    img[i]= loadImage('libraries/img/i' + i + '.jpg');
  }
  
    for (let n = 0; n < 3; n++) {
    png[n]=loadImage('libraries/png/p' + n + '.png');
  }
  
  
  textos = loadStrings('libraries/textos.txt');

} 

function mousePressed() {
  historia.mousePressed();
}
