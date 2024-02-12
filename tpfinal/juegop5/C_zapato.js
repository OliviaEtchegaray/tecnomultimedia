class Zapato {
  constructor(pngArray) {
    console.log("Imágenes de Zapato:");
    this.reset();
    this.png = png[2];
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

    if (this.y < 0) {
      this.dirY *= -1;
    }
  }

  mostrar() {
    image(this.png, this.x, this.y, this.tamano, this.tamano);
  }

  rebotar(almohada) {

    if (this.y + this.tamano / 2 >= almohada.y - almohada.tamanoY / 2 &&
        this.y - this.tamano / 2 <= almohada.y + almohada.tamanoY / 2 &&
        this.x + this.tamano / 2 >= almohada.x - almohada.tamanoX / 2 && 
        this.x - this.tamano / 2 <= almohada.x + almohada.tamanoX / 2) {

      this.dirY *= -1;

      this.puntaje++;

      console.log("¡Rebote con la almohada! Puntaje:", this.puntaje); 
      return true;
    }
    return false;
  }


perder() {  
    return this.y > height + this.tamano;
    
} }
