class Zapato {
  constructor(pngArray) {
    this.x = width / 2;
    this.y = height / 2;
    this.png = png[2];  
    this.dirX = random(1) > 0.5 ? 2 : -2;
    this.dirY = -2; 
    this.tamano = 40;  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
    this.dirX = random(1) > 0.5 ? 2 : -2;
    this.dirY = -2; }

  mover() {
    this.x += this.dirX;
    this.y += this.dirY;

    // Rebotes
    if (this.x > width || this.x < 0) {
      this.dirX *= -1; }

    if (this.y < 0) {
      this.dirY *= -1;  }  }

  mostrar() { image(this.png, this.x, this.y, this.tamano, this.tamano);}
  rebotar(almohada)
  { if (this.y > almohada.y - this.tamano / 2 && this.x > almohada.x - almohada.tamanoX / 2 && this.x < almohada.x + almohada.tamanoX / 2) {
    this.dirY *= -1; 
    return true;  }
  return false;  }
  
   perder() {
    return this.y > height;  }}
