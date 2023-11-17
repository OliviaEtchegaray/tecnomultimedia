// Video YT: https://youtu.be/leFXtLAmk2A

let juego;
let img = [];
let textos = [];

function setup() {
  createCanvas(600, 400);
  juego = new Juego(img, textos);
  juego.iniciar();}

function draw() {
  juego.actualizar();
  juego.mostrar();}

function mousePressed() {
  juego.cambiarEstados(mouseX, mouseY);}


function preload() {
  for (let i = 0; i < 6; i++) {
    img[i] = loadImage('libraries/img' + i + '.png');}

  textos = loadStrings('libraries/textos.txt');}
