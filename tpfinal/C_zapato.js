class Zapato {
  constructor(pngArray) {
    console.log("Imágenes de Zapato:");
    this.x = width / 2;
    this.y = height / 2;
    this.png = png[2];
    this.dirX = 2;
    this.dirY = 2;
    this.tamano = 40;
  }

  reset() {
  this.x = width / 2;
  this.y = height / 2;
  this.dirX = random(1) > 0.5 ? 2 : -2;
  this.dirY = -2;

  }

  mover() {
    this.x += this.dirX;
    this.y += this.dirY;

    // Rebotes
    if (this.x > width - this.tamano || this.x < 0) {
      this.dirX *= -1;
    }

    if (this.y > height - this.tamano || this.y < 0) {
      this.dirY *= -1;
    }


    this.x = constrain(this.x, 0, width - this.tamano);
    this.y = constrain(this.y, 0, height - this.tamano);
  }

  mostrar() {
    image(this.png, this.x, this.y, this.tamano, this.tamano);
  }

  rebotar(almohada) {
    if (almohada && this.y > almohada.y - this.tamano / 2 && this.x > almohada.x - almohada.tamanoX / 2 && this.x < almohada.x + almohada.tamanoX / 2) {
      this.dirY *= -1;
      return true;
    }
    return false;
  }

  perder() {
    return this.y > height;
  }
}
