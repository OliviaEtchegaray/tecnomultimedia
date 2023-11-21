class pantallas {
      constructor(imgArray,pjArray, textosArray) {
    this.img = [];
    this.pj = [];
        this.textos = [];
  }

//  Pantallas Dibujadas
  mostrar() {
    background(235, 235, 242);
    fill(26, 26, 28);
    textSize(22);
    image(this.img [0], 80, 100, 450, 400);
    image(this.pj [1], 250, 520, 120, 50);
    text(this.texto, 20, 50);
  }


  cambiarPantalla() {
 
    // Los clicks en los botones 
  }
}
