class Historia {
  constructor(imgArray,pjArray, textosArray) {
    this.pantallas = [];
    this.imgArray = imgArray;
    this.textosArray = textosArray;
      this.pjArray = pjArray;

    
    
    // Pantallas de la historia (llamo a los objetos)
    this.pantallas[0] = new Pantalla(loadImage("imagenes/i1.jpg"), loadImage("botones/b0.png"), textos[0]);
    this.pantallas[1] = new Pantalla(loadImage("imagenes/i4.jpg"), loadImage("botones/b2.png"), textos[10]);
  }

// Muestro en pantalla 
  mostrar() {
    this.pantallas[this.pantallaActual].mostrar();
  }

  actualizar() {
// Inicio hisotria
// inicio Jueggo
  }
  
    mousePressed() {
    this.pantallas[this.pantallaActual].cambiarPantalla();
    // Implementa más lógica de clics según sea necesario
  }
}
