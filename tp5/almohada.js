class almohada {
  constructor() {
    this.x = width / 2;
    this.img = img[1];
    this.tamanoX = 100;
    this.tamanoY = 36; 
    this.y = height - this.tamanoY;
    this.dirX = 0; 
    this.dirY = 0; }

  mover() {
   this.x = constrain(mouseX, this.tamanoX / 2, width - this.tamanoX / 2); }

  mostrar() {
    image(this.img, this.x, this.y, this.tamanoX, this.tamanoY); }}
