class Historia {
  constructor(imgArray, pngArray, textosArray) {
    this.pantallaActual = 0;
    this.imgArray = imgArray;
    this.textosArray = textosArray;
    this.pngArray = pngArray;  
     this.estado = "0"; } 


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
image(this.imgArray[0], width / 2 - 212.5, height / 5, 400, 400); 
image(this.pngArray[0], 400 - 60, 550 - 25, 120, 50);
fill(9,43,77);
textSize(20);
text("CREDITOS", 400, 550 + 5);}


   else if (this.estado === "1") {// creditos (AGREGAR BOTON) 
  background(185, 210, 235);
  fill(9,43,77);
  textSize(35); 
  textAlign(CENTER, CENTER);
  text(this.textosArray[2], width / 2, height / 10); 
   textSize(19);
    fill(50,84,137);
  text(this.textosArray[3],460,100); 
  text(this.textosArray[4],180,100); 
image(this.imgArray[0], width / 2 - 212.5, height / 5, 400, 400);
image(this.pngArray[0], 250, 550 - 25, 120, 50);
fill(9,43,77);
textSize(20);
text("INICIAR", 310, 550 + 5);}

// iniciar aventur agarfica 

else if (this.estado === "2") {
    background(250, 250, 250);
      textSize(18);
   image(this.imgArray[17], 80, 100, 450, 400);
   fill(0);
text(this.textosArray[5],240,30);
text(this.textosArray[6],250,50);
text(this.textosArray[7],120,70); 
image(this.pngArray[0], 250, 550 - 25, 120, 50);
fill(9,43,77);
textSize(18);
text("SIGUIENTE", 315, 550 + 5);}
      

else if (this.estado === "3") {
    background(250, 250, 250);
      textSize(18);
   image(this.imgArray[18], 80, 100, 450, 400);
   fill(0);
text(this.textosArray[8],250,30);
text(this.textosArray[9],100,50);
image(this.pngArray[0], 250, 550 - 25, 120, 50);
fill(9,43,77);
textSize(18);
text("SIGUIENTE", 315, 550 + 5);}
      
else if (this.estado === "4") {
    background(250, 250, 250);
      textSize(18);
   image(this.imgArray[1], 80, 100, 450, 400);
   fill(0);
text(this.textosArray[10],230,30);
text(this.textosArray[11],100,50);
image(this.pngArray[0], 250, 550 - 25, 120, 50);
fill(9,43,77);
textSize(18);
text("SIGUIENTE", 315, 550 + 5);}
      
} 

  mousePressed() {
    this.cambiarEstado();
  }
  cambiarEstado() {
// momentaneo solo para mostrar estados 
    if (this.estado === "0") {
      this.estado = "1";
    } else if (this.estado === "1") {
      this.estado = "2";
    } else if (this.estado === "2") {
      this.estado = "3";
    } else if (this.estado === "3") {
      this.estado = "4";
    }else if (this.estado === "4") {
      this.estado = "0";}
  } } 
