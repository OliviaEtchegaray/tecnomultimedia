class Juego {
  constructor(imgArray, textosArray) {
    this.estado = "inicio";
    this.Zapato = new Zapato(imgArray[2]);
    this.almohada = new almohada();
    this.puntaje = 0;
    this.imgArray = imgArray;
    this.textosArray = textosArray;
  }

iniciar() {
    this.Zapato.reset();
    this.puntaje = 0; 
    this.estado = "inicio"; 
  }

  mostrar() {
    background(44);
    if (this.estado === "inicio") {
      image(this.imgArray[0], width / 2 - this.imgArray[0].width / 2, height / 2 - this.imgArray[0].height / 2);
      textSize(40);
      fill(232, 232, 232);
      textAlign(CENTER, CENTER);
      text(this.textosArray[0], width / 2, height / 2 - 110);
      textSize(20);
      text(this.textosArray[1], width / 2, height / 2 - 60);
      text(this.textosArray[2], width / 2, height / 2 - 40);
      text(this.textosArray[3], width / 2, height / 2 - 20);
      text(this.textosArray[4], width / 2, height / 2);
      textSize(27);
      fill(127, 188, 247);
      text(this.textosArray[12], width / 2, height / 2 + 140);} 
      else if (this.estado === "jugando") {
      image(this.imgArray[5], width / 2 - this.imgArray[5].width / 2, height / 2 - this.imgArray[5].height / 2);
      image(this.Zapato.img, this.Zapato.x, this.Zapato.y, this.Zapato.tamano, this.Zapato.tamano);
      textSize(40);
      this.almohada.mostrar();
      this.Zapato.mostrar();

      // puntaje
          textSize(30);
      fill(255);
      textAlign(CENTER, TOP);
      text(this.puntaje, width / 2, 10); }
      
console.log(this.estado)
if (this.estado === "perder") {
    fill(255, 0, 0);
  image(this.imgArray[4], width / 2 - this.imgArray[4].width / 2, height / 2 - this.imgArray[4].height / 2);
  textSize(40);
  textAlign(CENTER, CENTER);
  text(this.textosArray[5], width / 2, height / 2 - 110);
  fill(255, 255, 255);
  textSize(20);
  text(this.textosArray[6], width / 2, height / 2 - 60);
 text(this.textosArray[7], width / 2, height / 2 + 40);
text(this.textosArray[8], width / 2, height / 2 + 90); }
      

else if (this.estado === "ganar") {
  fill(10, 147, 49);
  image(this.imgArray[3], 0, 0, width, height);
  // ganaste
  textSize(40);
  textAlign(CENTER, CENTER);
   text(this.textosArray[9], width / 2, height / 2 - 110);
   // textos
  fill(255, 255, 255); 
  textSize(20);
  text(this.textosArray[10], width / 2, height / 2 - 60);
  text(this.textosArray[11], width / 2, height / 2 - 40);
  // volver
  text(this.textosArray[8], width / 2, height / 2 + 90);
}}

actualizar(){
    if (this.estado === "inicio") {
      // Lógica para el estado "inicio"
    } else if (this.estado === "jugando") {
      image(this.imgArray[5], width / 2 - this.imgArray[5].width / 2, height / 2 - this.imgArray[5].height / 2);
      image(this.Zapato.img, this.Zapato.x, this.Zapato.y, this.Zapato.tamano, this.Zapato.tamano);
      this.Zapato.mover();
      this.almohada.mover(); 
      this.Zapato.mostrar();

if (this.Zapato.rebotar(this.almohada)) {
  this.puntaje++; 
  if (this.puntaje >= 10) {
          this.estado = "ganar"; 
          noLoop(); }}
      if (this.Zapato.perder()) {
        this.estado = "perder";
        noLoop(); 
  }} }
  
  
cambiarEstados(mouseX, mouseY) {
  
 if (this.estado === "inicio") {
    if (mouseX > width / 2 - this.imgArray[1].width / 2 - 20 &&
        mouseX < width / 2 + this.imgArray[1].width / 2 - 20 &&
        mouseY > height / 2 + 140 &&
        mouseY < height / 2 + 140 + this.imgArray[1].height) {
        this.estado = "jugando";} }
        
        else if (this.estado === "perder") {
    if (mouseY > height / 2 + 30 && mouseY < height / 2 + 30 + this.imgArray[4].height) {
      this.iniciar(); 
      this.estado = "jugando";
      loop(); 
      //
     if (mouseX > width / 2 - this.imgArray[4].width / 2 && mouseX < width / 2 + this.imgArray[4].width / 2 && mouseY > height / 2 + 80 && mouseY < height / 2 + 80 + this.imgArray[4].height) {
        this.estado = "inicio";} }
   } else if (this.estado === "ganar") { 
      this.estado = "inicio";
      this.iniciar(); 
      loop(); 
    }
} } 
