// Olivia Etchegaray 93537/0
// Cuento: "La Cenicienta" Charles Perrault 
// Juego PONG
// Video YT. 


// clases
let pantallas;
let Historia;
let juego;
let pj = [];
let img = [];
let textos = [];


function setup() {
  createCanvas(600, 600);
  pantallas = new pantallas();
}

function draw() {
  pantallas.actualizar();
  jpantallas.mostrar();
}

function preload() {
  for (let i = 0; i < 3; i++) {
    pj[i] = loadImage('assets/pj' + i + '.png'); 
  } 
  for (let n = 0; n < 4; n++) {
    img[n] = loadImage('assets/img' + n + '.jpg');
  } 
  textos = loadStrings('assets/textos.txt');
}

// Meter imagenes, botones y texts a assets 

function mousePressed() {
  Historia.cambiarpantallas(mouseX, mouseY);}
  
  
  // Objetos, Valores 
