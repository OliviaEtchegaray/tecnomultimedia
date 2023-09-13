//Video YT: https://youtu.be/OZVvvxlQw1k?si=Z062HejkDwfqgT61
// Reenvío el trabajo ya que modifique parte de mi código con la clase :)


let x, y, dirX, dirY, j1;
let estado = 0;
let Reinicio = false;
let Ganar = false;

function setup() {
  createCanvas(600, 400);
  x = width / 2;
  y = height / 2;
  dirX = random(1) > 0.5 ? 2 : -2; // Aumentamos la velocidad
  dirY = 2; 
  j1 = 0;
}

function draw() {
  background(44);
  
  // pantalla inicio 

  if (estado === 0) {
    textSize(60);
    fill(232, 232, 232);
    textAlign(CENTER, CENTER);
    text("PONG", width / 2, height / 2 - 110);
    textSize(24);
    text("INSTRUCCIONES", width / 2, height / 2 - 40);
    textSize(20);
    text("Debes moverte con el mouse.", width / 2, height / 2 + 10);
    text("Si llegas a 10 puntos ganas.", width / 2, height / 2 + 40);
    textSize(27);
    fill(175, 175, 175);
    text("CLICK AQUÍ PARA EMPEZAR", width / 2, height / 2 + 140);
    
    // jugando 
    
  } else if (estado === 1) {
    // j1
  rectMode(CENTER);
    rect(mouseX, height - 10, 100, 10);
    
    // pelotita

    square(x, y, 10, 10);
    x += 2 * dirX;
    y += 2 * dirY;
    
    // rebotes

    if (x > width || x < 0) {
      dirX *= -1; }

    if (y < 0) {
      dirY *= -1;}

    if (y > height - 10) {
      if (x > mouseX - 50 && x < mouseX + 50) {
        dirY *= -1;
        j1++;
        if (j1 >= 10) {
          Ganar = true;
          noLoop(); } } }

    if (y > height) {
      Reinicio = true; // Si perdemos a ganamos nos pone los textos en pntaalla
      noLoop(); }
// puntaje
    textSize(30);
    fill(255);
    textAlign(CENTER, TOP);
    text(j1, width / 2, 10);
  }

  if (Reinicio || Ganar) {
    textSize(40);
    textAlign(CENTER, CENTER);
    if (Reinicio) {
      fill(255, 0, 0);
      text('Perdiste :(', width / 2, height / 2); }
    if (Ganar) {
      fill(71, 167, 94);
      text('¡Ganaste!', width / 2, height / 2); }
    textSize(20);
    fill(255);
    text('Reiniciar', width / 2, height / 2 + 40);
    text('Volver', width / 2, height / 2 + 80); }}

function resetJuego() {
  x = width / 2;
  y = height / 2;
  dirX = random(1) > 0.5 ? 2 : -2;
  dirY = 2;
  j1 = 0;
  Reinicio = false;
  Ganar = false;
  estado = 1;
  loop();}

function mousePressed() {
  if (estado === 0 && mouseY > height / 2 + 110 && mouseY < height / 2 + 170) {
    estado = 1;
  } else if ((Reinicio || Ganar) && mouseX > width / 2 - 100 && mouseX < width / 2 + 100) {
    if (mouseY > height / 2 + 10 && mouseY < height / 2 + 60) {
      resetJuego();
    } else if (mouseY > height / 2 + 60 && mouseY < height / 2 + 110) {
      estado = 0; j1 = 0; Reinicio = false;  Ganar = false;
      loop();  }}}
  
