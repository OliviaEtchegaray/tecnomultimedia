class Historia {
  constructor(imgArray, pjArray, textosArray) {
    this.pantallaActual = 0;
    this.imgArray = imgArray;
    this.textosArray = textosArray;
    this.pjArray = pjArray;  
     this.estado = "0"; }
     
     cambiarPantalla(nuevapantalla){
    this.estado = nuevapantalla;
  } 


mostrar() {
   background(185, 210, 235);
    if (this.estado === "0") { // inicio 
  fill(9,43,77);
  textSize(35); 
  textAlign(CENTER, CENTER);
  text(this.textosArray[0], width / 2, height / 10); 
   textSize(20);
    fill(250);
  text(this.textosArray[1], width / 2, height / 6); 
image(this.imgArray[0], width / 2 - 212.5, height / 5, 400, 400);}


   else if (this.estado === "1") {// creditos (AGREGAR BOTON) 
  background(185, 210, 235);
  fill(9,43,77);
  textSize(35); 
  textAlign(CENTER, CENTER);
  text(this.textosArray[2], width / 2, height / 10); 
   textSize(20);
    fill(250);
  text(this.textosArray[3], width / 2, height / 2); 
  text(this.textosArray[4], width / 2, height / 3); 
image(this.imgArray[0], width / 2 - 212.5, height / 5, 400, 400); }

// iniciar aventur agarfica 

else if (this.estado === "3") { // en el estado 10 (final) hay que lograr que cenicienta se ponga el zapato 
      this.juego.mostrar();}
    
  
} }
