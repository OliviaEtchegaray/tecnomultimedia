class Juego {
  constructor(imgArray, pngArray) {
  console.log(this.imgArray);
      this.imgArray = imgArray;
    this.pngArray = pngArray; 
    this.Zapato = new Zapato(pngArray);
    this.almohada = new almohada(pngArray);
    this.puntaje = 0;


  } 

iniciar() {
    this.Zapato.reset();
    this.puntaje = 0; 
  }

 mostrar() {
    background(44);
    console.log(this.estado);

    // Verifica si imgArray tiene al menos 19 elementos
    if (this.imgArray && this.imgArray.length >= 19) {
      image(this.imgArray[18], 0, 0, width, height);
      console.log(this.Zapato);
      image(this.Zapato.png, this.Zapato.x, this.Zapato.y, this.Zapato.tamano, this.Zapato.tamano);
      textSize(40);
      this.almohada.mostrar();
      this.Zapato.mostrar();

      // puntaje
      textSize(30);
      fill(255);
      textAlign(CENTER, TOP);
      text("Puntaje: " + this.puntaje, width / 2, 10);
    }
  }
      

actualizar(){

image(this.imgArray[18], 0, 0, width, height );
      image(this.Zapato.png, this.Zapato.x, this.Zapato.y, this.Zapato.tamano, this.Zapato.tamano);
      this.Zapato.mover();
      this.almohada.mover(); 
      this.Zapato.mostrar();

if (this.Zapato.rebotar(this.almohada)) {
  this.puntaje++; 
  if (this.puntaje >= 10) {
          this.estado = "19"; 
          noLoop(); }}
      if (this.Zapato.perder()) {
        this.estado = "18";
        noLoop(); 
  }}} 
