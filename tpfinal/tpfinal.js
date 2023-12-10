// Olivia Etchegaray 93537/0
// Cuento: "La Cenicienta" Charles Perrault 
// Juego PONG



// clases
let historia; // aventura
let juego; // juego 
let miBoton; // botones
let png = [];
let img = [];
let textos = [];

function setup() {
  createCanvas(600, 600);
  historia = new Historia(img, png, textos);
  juego = new Juego();
   miBoton = new Boton();

}


function draw() {
  if (juego.estado === "jugando") {
    juego.actualizar();
    juego.mostrar();
  } else {
    historia.mostrar();
    miBoton.mostrar();
  }
}


function preload() {

  for (let i= 0; i< 19; i++) {
    img[i] = loadImage('libraries/img/i' + i + '.jpg'); }
  
    for (let n = 0; n < 3; n++) {
    png[n] = loadImage('libraries/png/p' + n + '.png');}
  
  
  textos = loadStrings('libraries/textos.txt');

} 

function mousePressed() {
  historia.mousePressed();
  historia.botonpresionado();
  if (juego.estado === "17") {
    juego.iniciar();
    loop();
  }
}
