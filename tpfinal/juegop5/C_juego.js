class Juego {
  constructor(imgArray, pngArray, textosArray) {
    this.imgArray = imgArray;
    this.pngArray = pngArray;
     this.estado = "jugando"; 
    this.Zapato = new Zapato(pngArray); 
    this.almohada = new almohada(pngArray);
    this.puntaje = 0;
  }

  iniciar() {}
  
 mostrar() {
  console.log("Zapato:", this.Zapato);
  if (this.imgArray && this.imgArray.length >= 19) {
    image(this.imgArray[18], 0, 0, width, height);
    this.Zapato.mostrar(); 
    this.almohada.mostrar();
    textSize(30);
    fill(255);
    textAlign(CENTER, TOP);
    text(this.puntaje, width / 2, 10);
  }
}
  actualizar() {
    console.log("Estado del juego:", this.estado);
    console.log("Actualizando...");
    this.Zapato.mover(); 
    this.almohada.mover();

    if (this.Zapato.rebotar(this.almohada)) {
        console.log("¡Rebote! Puntaje:", this.puntaje); 
        this.puntaje++;
        if (this.puntaje >= 10) {
            this.estado = "19";
            noLoop();
        }
    }

    
     if (this.Zapato.y > height) {
      console.log("¡Zapato debajo de y!");
      this.estado = "18"; // Cambiar al estado 18
      noLoop();
    }

    if (this.estado === "jugando" && !this.juego) {
        this.juego = new Juego(this.imgArray, this.pngArray);
        this.juego.iniciar();
    } else if (this.estado !== "jugando" && this.juego) {
        this.juego = null; // Eliminar la instancia del juego cuando no estamos en el estado "jugando"
        loop(); // Reanudar el bucle de dibujo
    }
  }}
