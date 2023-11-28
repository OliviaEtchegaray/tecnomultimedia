class Botones {
  constructor(posX, posY, tam, Nombre, toPantalla) {
    this.posX=posX;
    this.posY=posY;
    this.tamX= tam;
    this.tamY= tam/2;
    this.Color = color(232, 232, 232);
    this.Nombre = Nombre;
    this.toPantalla=toPantalla;
    this.textSize=tam/4.8;
  }
  dibujar() {
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
    fill(this.Color);
    rect(this.posX, this.posY, this.tamX, this.tamY);
    textSize(this.textSize);
    fill(255);
    text(this.Nombre, this.posX, this.posY);
  }

  Click() {
// clickeos en los botones 
    }
  }
