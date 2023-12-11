class Historia {
  constructor(imgArray, pngArray, textosArray) {
    this.pantallaActual = 0;
   this.juego = new Juego(imgArray, pngArray);
    this.imgArray = imgArray;
    this.textosArray = textosArray;
    this.pngArray = pngArray;  
     this.estado = "0"; 
     // botones
     Boton.CrearBotones()
  this.botones = Boton.botones;
   this.boton1 = Boton.boton1;
       this.boton2 = Boton.boton2;
    this.boton3 = Boton.boton3;
    this.boton4 = Boton.boton4;
    this.boton5 = Boton.boton5;
    this.boton7 = Boton.boton7;
    this.boton8 = Boton.boton8;
    this.boton9 = Boton.boton9;
this.boton10 = Boton.boton10;
this.boton11 = Boton.boton11;
} 


mostrar() { console.log (this.estado);

   background(185, 210, 235);   // PANTALLA INICIO 
    if (this.estado === "0") { 
  fill(9,43,77);
  textSize(35); 
  textAlign(CENTER, CENTER);
  text(this.textosArray[0], width / 2, height / 10); 
   textSize(20);
    fill(250);
  text(this.textosArray[1], width / 2, height / 6); 
image(this.imgArray[0], width / 2 - 212.5, height / 5, 400, 400); 
  image(this.pngArray[0], 100, 550 - 25, 120, 50);
  fill(9, 43, 77);
  textSize(20);
  text("INICIAR", 159, 545 + 5);
image(this.pngArray[0], 400 - 60, 550 - 25, 120, 50);
fill(9,43,77);
textSize(20);
text("CRÉDITOS", 400, 545 + 5);}


 else if (this.estado === "1") { 
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
 this.boton1.mostrar();
}
    

else if (this.estado === "2") { // INICIA AVENTUA GRAFICA
    background(250, 250, 250);
      textSize(18);
image(this.imgArray[15], 0, height / 6, width, 600);
   fill(0);
text(this.textosArray[5],240,30);
text(this.textosArray[6],250,50);
text(this.textosArray[7],120,70); 
    this.boton2.mostrar();
  }

else if (this.estado === "3") {
    background(250, 250, 250);
      textSize(18);
image(this.imgArray[16], 0, height / 8, width, 600);
   fill(0);
text(this.textosArray[8],250,30);
text(this.textosArray[9],100,50);
    this.boton2.mostrar();
  }
      
else if (this.estado === "4") {
    background(250, 250, 250);
      textSize(18);
image(this.imgArray[1], 0, height / 6, width, 600);
   fill(0);
text(this.textosArray[10],230,50);
text(this.textosArray[11],120,70);
    this.boton2.mostrar();
  }
   
    
else if (this.estado === "5") {
    background(250, 250, 250);
      textSize(18);
image(this.imgArray[2], 0, height / 6, width, 600);
   fill(0);
text(this.textosArray[12],230,30);
text(this.textosArray[13],185,50);
text(this.textosArray[14],90,70);
    this.boton3.mostrar();
  }
      
    
else if (this.estado === "6") {
    background(250, 250, 250);
      textSize(18);
image(this.imgArray[3], 0, height / 6, width, 600);
   fill(0);
text(this.textosArray[15],185,50);
    this.boton5.mostrar();
  } 
     
else if (this.estado === "7") {
    background(250, 250, 250);
      textSize(18);
image(this.imgArray[4], 0, height / 6, width, 600);
   fill(0);
text(this.textosArray[16],200,50);
    this.boton2.mostrar();
  }
      
 // DECISION 1
 
 else if (this.estado === "8") {
    background(250, 250, 250);
      textSize(18);
image(this.imgArray[5], 0, height / 6, width, 600);
   fill(0);
text(this.textosArray[17],200,50);
    this.boton3.mostrar();
    this.boton4.mostrar();}
 // ACEPTA
  else if (this.estado === "9") {
    background(250, 250, 250);
      textSize(18);
image(this.imgArray[7], 0, height / 6, width, 600);
   fill(0);
text(this.textosArray[18],230,30);
    this.boton2.mostrar();}
    // RECHAZA
    else if (this.estado === "10") {
    background(250, 250, 250);
      textSize(18);
image(this.imgArray[6], 0, height / 6, width, 600);
   fill(0);
text(this.textosArray[19],230,30);
    this.boton7.mostrar();
    this.boton11.mostrar();}
    // PIERDE
    else if (this.estado === "11") {
    background(250, 250, 250);
       fill(160,0,0);
image(this.imgArray[8], 0, height / 6, width, 600);
 textSize(40);
  textAlign(CENTER, CENTER);
text(this.textosArray[21],280,50);
fill (0);
  textSize(18);
  text(this.textosArray[22],280,80);
    this.boton10.mostrar();}
// 

  else if (this.estado === "12") {
    background(250, 250, 250);
      textSize(18);
image(this.imgArray[9], 0, height / 6, width, 600);
   fill(0);
text(this.textosArray[20],230,30);
    this.boton7.mostrar();
    this.boton9.mostrar();} 
    
    else if (this.estado === "13") {
    background(250, 250, 250);
       fill(160,0,0);
image(this.imgArray[11], 0, height / 6, width, 600);
 textSize(40);
  textAlign(CENTER, CENTER);
text(this.textosArray[21],280,50);
fill (0);
  textSize(18);
  text(this.textosArray[23],280,80);
    this.boton10.mostrar();}
    
   else if (this.estado === "14") {
    background(250, 250, 250);
      textSize(18);
image(this.imgArray[10], 0, height / 6, width, 600);
   fill(0);
text(this.textosArray[24],230,30);
    this.boton2.mostrar();}   
    
     else if (this.estado === "15") {
    background(250, 250, 250);
      textSize(18);
image(this.imgArray[12], 0, height / 6, width, 600);
   fill(0);
text(this.textosArray[25],230,30);
text(this.textosArray[26],125,50);
    this.boton2.mostrar();}
   
    
    else if (this.estado === "16") {
    background(250, 250, 250);
        fill(61,143,196);
image(this.imgArray[13], 0, height / 6, width, 600);
textSize(40);
  textAlign(CENTER, CENTER);
text(this.textosArray[27],280,50);
     fill(0);
       textSize(18);
text(this.textosArray[28],280,80);
    this.boton1.mostrar();}
    
 else if (this.estado === "17" && this.juego) {
       this.juego.iniciar();
      this.juego.mostrar();
      this.juego.actualizar();
      
 }
// PERDER

else if (this.estado === "18") {
    fill(255, 0, 0);
  image(this.imgArray[17], width / 2 - this.imgArray[17].width / 2, height / 2 - this.imgArray[17].height / 2);
  textSize(40);
  textAlign(CENTER, CENTER);
  text(this.textosArray[21], width / 2, height / 2 - 110);
  fill(255, 255, 255);
  textSize(20);
  text(this.textosArray[29], width / 2, height / 2 - 60);
 text(this.textosArray[30], width / 2, height / 2 + 40);
this.boton10.mostrar();} 

// gGANAR
else if (this.estado === "19") {
  fill(10, 147, 49);
  image(this.imgArray[14], 0, 0, width, height);
  // ganaste
  textSize(40);
  textAlign(CENTER, CENTER);
   text(this.textosArray[31], width / 2, height / 2 - 110);
   // textos
  fill(255, 255, 255); 
  textSize(20);
  text(this.textosArray[32], width / 2, height / 2 - 60);
this.boton10.mostrar();
}}

actualizar() {


    if (this.estado === "17" && !this.juego) {
        this.juego = new Juego(this.imgArray, this.pngArray);
        this.juego.iniciar();
            this.juego.mostrar();
      this.juego.actualizar();
    }
}
    

 mousePressed() {
    this.cambiarEstado();
  }
cambiarEstado() {
  if (this.estado === "0") {
    // Verificar si se hizo clic en el área del botón "INICIAR"
    if (mouseX > 100 && mouseX < 100 + 120 && mouseY > 550 - 25 && mouseY < 550 - 25 + 50) {
      this.estado = "2";
    } 
    // Verificar si se hizo clic en el área del botón "CRÉDITOS"
    else if (mouseX > 400 - 60 && mouseX < 400 - 60 + 120 && mouseY > 550 - 25 && mouseY < 550 - 25 + 50) {
      this.estado = "1";
    } } } 
botonpresionado() {
  for (let boton of Boton.botones) {
    if (boton.Click()) {
      // Agrega lógica aquí según el botón presionado
      if (boton === Boton.boton1 && this.estado === "1") {
        this.estado = "2"; 
      } else if (boton === Boton.boton2 && this.estado === "2") {
        this.estado = "3";
      } else if (boton === Boton.boton2 && this.estado === "3") {
        this.estado = "4";
      } else if (boton === Boton.boton2 && this.estado === "4") {
        this.estado = "5";
      } else if (boton === Boton.boton3 && this.estado === "5") {
        this.estado = "6";
      } else if (boton === Boton.boton5 && this.estado === "6") {
        this.estado = "7";
      } else if (boton === Boton.boton2 && this.estado === "7") {
        this.estado = "8";
      } else if (boton === Boton.boton3 && this.estado === "8") {
        this.estado = "9";
      } else if (boton === Boton.boton4 && this.estado === "8") {
        this.estado = "10";
          } else if (boton === Boton.boton11 && this.estado === "10") {
        this.estado = "9";
          } else if (boton === Boton.boton7 && this.estado === "10") {
        this.estado = "11"; }
          else if (boton === Boton.boton10 && this.estado === "11") {
        this.estado = "0"; }
        else if (boton === Boton.boton2 && this.estado === "9") {
        this.estado = "12"; }
         else if (boton === Boton.boton7 && this.estado === "12") {
        this.estado = "14"; } 
        else if (boton === Boton.boton9 && this.estado === "12") {
        this.estado = "13";}
        else if (boton === Boton.boton10 && this.estado === "13") {
        this.estado = "0"; }
         else if (boton === Boton.boton2 && this.estado === "14") {
        this.estado = "15"; }
       else if (boton === Boton.boton2 && this.estado === "15") {
        this.estado = "16"; }
       else if (boton === Boton.boton1 && this.estado === "16") {
        this.estado = "17"; }  if (juego.estado === "17") {
    juego.iniciar();
    loop();
  } else if (this.estado === "17" && this.juego) {
    this.juego.iniciar();
    this.juego.mostrar();
    this.juego.actualizar();
  }
             
       else if (boton === Boton.boton10 && this.estado === "18") {
        this.estado = "0"; }
               
       else if (boton === Boton.boton10 && this.estado === "19") {
        this.estado = "0"; }

  }}}}
