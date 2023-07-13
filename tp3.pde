
int pantalla= 0;
PImage i1, boton, creditos, i2, siguiente, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, aceptar, rechazar, quedarme, irme, ir, no, huir, irconel, reiniciar ;
PFont fuente ;
int ancho=450;
int largo=400;
int cambio = 0;

//imagenes 

void setup(){
size(600,600);
i1= loadImage("i1.jpg"); boton= loadImage("comenzar.png"); creditos= loadImage("creditos.png");
siguiente= loadImage("siguiente.png"); i2= loadImage("i2.jpg"); i3= loadImage("i3.jpg");
i4= loadImage("i4.jpg"); i5= loadImage("i5.jpg"); i6= loadImage("i6.jpg");i7= loadImage("i7.jpg");
i8= loadImage("i8.jpg"); i9= loadImage("i9.jpg"); i10= loadImage("i10.jpg");
i11= loadImage("i11.jpg"); i12 = loadImage("i12.jpg"); i13 = loadImage("i13.jpg");i14 = loadImage("i14.png");
i15 = loadImage("i15.jpg");i16 = loadImage("i16.jpg");i17 = loadImage("i17.jpg"); i18 = loadImage("i18.jpg");
i19 = loadImage("i19.jpg"); aceptar= loadImage("si.png");
rechazar= loadImage("no.png");quedarme= loadImage("QUEDARME.png");
huir= loadImage("HUIR.png"); irconel= loadImage("IRCONEL.png"); irme= loadImage("IRME.png");
ir= loadImage("ir.png"); no= loadImage("no ir.png"); no= loadImage("no ir.png");
reiniciar= loadImage("reiniciar.png");
fuente= loadFont("BellMT-48.vlw");
}

void draw() {
background(146, 149, 198);
textFont(fuente);

// INICIO

if(pantalla==0){  
  frameRate(60);
  fill(1, 6, 95);
  ellipse(mouseX,mouseY,10,10);
  fill(250);
  textSize(30);
  text("La Cenicienta - Charles Perrault",110,50);
  text("El Juego",250,80);
  image(i1, 90, 100, 425, 400);
  image(boton, 350, 520, 120, 50);
  image(creditos, 150, 520, 120, 50);} 

// pantalla 1
 else if(pantalla==1){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i2, 80, 100, 450, 400);
  image(siguiente, 250, 520, 120, 50);
text("Oh no! Tus hermanas arruinaron todo tu vestido \n  para que no vayas. ",20,50);}

// pantalla 2 
 else if(pantalla==2){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i3, 80, 100, 450, 400);
 image(aceptar, 250, 520, 120, 50);
text("Una señora aparece haciendose llamar Hada Madrina. \n Te ofrece convertirte en una princesa para poder asistir \n  al baile ",20,30);}

// pantalla 3
 else if(pantalla==3){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i4, 80, 100, 450, 400);
  image(ir, 400, 420, 120, 50);
text("¡Ya eres toda una princesa! ",50,50);}

// pantalla 4 
 else if(pantalla==4){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i5, 80, 100, 450, 400);
 image(siguiente, 250, 520, 120, 50);
text("Llegas al baile y todos quedan impactados \n con tu belleza  ",50,50); }

// pantalla 5
 else if(pantalla==5){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i6, 80, 100, 450, 400);
 image(aceptar, 400, 420, 120, 50);
  image(rechazar, 400, 350, 120, 50);
text("El principe se ve interesado en ti y te invita \n a bailar. ¿Aceptas? ",50,50);}

// pantalla 6
 else if(pantalla==6){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i7, 80, 100, 450, 400);
 image(huir, 400, 420, 120, 50);
  image(irconel, 400, 350, 120, 50);
text("Tu madastra te vió y se está acercando, ¿Qué haces? ",50,50);}

// pantalla 8
 else if(pantalla==8){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i9, 80, 100, 450, 400);
  image(reiniciar, 250, 520, 120, 50);
text("¡Te tropezaste y te atrapó! ",50,50);
text("GAME OVER ",300,90);}


// pantalla 7
 else if(pantalla==7){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i8, 80, 100, 450, 400);
  image(siguiente, 250, 520, 120, 50);
text(" Se quedan bailando gran parte de la noche y \n conociendose mejor ",50,50);}

// pantalla 9
 else if(pantalla==9){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i10, 80, 100, 450, 400);
 image(quedarme, 400, 420, 120, 50);
  image(huir, 400, 350, 120, 50);
text(" La medianoche se aproxima, ¿Qué decides hacer? ",50,50);}

// pantalla 10
 else if(pantalla==10){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i11, 80, 100, 450, 400);
  image(siguiente, 250, 520, 120, 50);
text(" Huyes pero en el camino pierdes un zapato, de \n  lejos se escuchan los gritos del principe \n llamándote.  ",20,30);}

// pantalla 11
 else if(pantalla==11){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i12, 80, 100, 450, 400);
  image(reiniciar, 250, 520, 120, 50);
text("Vió quien eras relmente y le pareció una falta \n de respeto tu mentira.",50,50);
text("GAME OVER ",300,90);}

// pantalla 12

 else if(pantalla==12){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i13, 80, 100, 450, 400);
 image(ir, 400, 420, 120, 50);
  image(quedarme, 400, 350, 120, 50);
text("Te enteras que el principe está buscando a su futura \n esposa con el zapato de cristal que perdiste. \n A quién le quede le pedirá matrimonio. ",50,30);}

// pantalla 13
 else if(pantalla==13){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i15, 80, 100, 450, 400);
 image(ir, 400, 420, 120, 50);
text("Tus amigos te insisten para que vayas ",50,50);}

// pantalla 14
 else if(pantalla==14){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i14, 80, 100, 450, 400);
 image(huir, 400, 420, 120, 50);
  image(quedarme, 400, 350, 120, 50);
text("Tus hermanastras te encerraron para que no vayas. ¿Escapas?",25,50);}

// pantalla 15
 else if(pantalla==15){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i16, 80, 100, 450, 400);
    image(siguiente, 250, 520, 120, 50);
text("¡El zapato encajó a la perfección!",50,50);}

// pantalla 16 FINAL
 else if(pantalla==16){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i17, 80, 100, 450, 400);
    image(reiniciar, 250, 520, 120, 50);
text("¡FINAL FELIZ! ¡Vivieron felices para siempre!",50,50);}

// primeras dos pantallas arregladas 
// pantalla 1.2
 else if(pantalla==18){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i18, 80, 100, 450, 400);
  image(siguiente, 250, 520, 120, 50);
text("Desde la muerte de tu madre tus hermanastras y \n madastra te han hecho la vida imposible. Las escuchas \n hablar del baile real, el cuál tu esperas mucho por ir ",20,30);}

 // pantalla 2.2 
 else if(pantalla==19){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(i19, 80, 100, 450, 400);
  image(siguiente, 250, 520, 120, 50);
text("Con ayuda de tus amigos roedores lograste \n hacer un vestido y ya estás lista para ir ",20,50);}

// pantalla de creditos 

else if(pantalla==17)
{ fill(250);
  textSize(30);
  text("CRÉDITOS",220,50);
  text("Alumno: Olivia Etchegaray 93537/0 \n Autor de la obra:Charles Perrault ",65,100);
  image(boton, 250, 520, 120, 50);
   image(i1, 130, 165, 325, 300);}
}
// Click entre pantallas 
void mousePressed() {
  // comenzar 
  if (pantalla == 0  && mouseX > 350 && mouseX < 470 && mouseY > 520 && mouseY < 570) {
    pantalla = 18; }
    // historia
     else if (pantalla == 18  && mouseX > 100 && mouseX < 675 && mouseY > 15 && mouseY < 865) {
    pantalla = 19;
    cambio = 0; }
       else if (pantalla == 19  && mouseX > 100 && mouseX < 675 && mouseY > 15 && mouseY < 865) {
    pantalla = 1;
    cambio = 0; }
  else if (pantalla == 1 && mouseX > 100 && mouseX < 675 && mouseY > 15 && mouseY < 865) {
    pantalla = 2;
    cambio = 0; } 
    else if (pantalla == 2 && mouseX > 100 && mouseX < 675 && mouseY > 15 && mouseY < 865) {
    pantalla = 3;
    cambio = 0; }
     else if (pantalla == 3 && mouseX > 400 && mouseX < 520 && mouseY > 420 && mouseY < 470) {
    pantalla = 4;
    cambio = 0; } 
      else if (pantalla == 4 && mouseX > 100 && mouseX < 675 && mouseY > 15 && mouseY < 865) {
    pantalla = 5;
    cambio = 0; }
    // decisión 1
          else if (pantalla == 5 && mouseX > 400 && mouseX < 520 && mouseY > 420 && mouseY < 470)
 { pantalla = 7;
    cambio = 0; }
              else if (pantalla == 5 && mouseX > 400 && mouseX < 520 && mouseY > 350 && mouseY < 400)
 {
    pantalla = 6;
    cambio = 0; }
    // decisión 2
            else if (pantalla == 6 && mouseX > 400 && mouseX < 520 && mouseY > 350 && mouseY < 400 ) {
    pantalla = 7;
    cambio = 0; }
               else if (pantalla == 6 && mouseX > 400 && mouseX < 520 && mouseY > 420 && mouseY < 470) {
    pantalla = 8;
    cambio = 0; } 
    // reinicio 
    else if (pantalla == 8 && mouseX > 100 && mouseX < 675 && mouseY > 15 && mouseY < 865) {
    pantalla = 0;
    cambio = 0; } 
//
   else if  (pantalla == 7 && mouseX > 100 && mouseX < 675 && mouseY > 15 && mouseY < 865) {
    pantalla = 9;
    cambio = 0; } 
    // deicsion 3 
     else if (pantalla == 9 && mouseX > 400 && mouseX < 520 && mouseY > 350 && mouseY < 400 ) {
    pantalla = 10;
    cambio = 0; }
               else if (pantalla == 9 && mouseX > 400 && mouseX < 520 && mouseY > 420 && mouseY < 470) {
    pantalla = 11;
    cambio = 0; }  
      // reinicio 
    else if (pantalla == 11 && mouseX > 100 && mouseX < 675 && mouseY > 15 && mouseY < 865) {
    pantalla = 0;
    cambio = 0; } 
    // 
        else if (pantalla == 10 && mouseX > 100 && mouseX < 675 && mouseY > 15 && mouseY < 865) {
    pantalla = 12;
    cambio = 0; }    
    // decision 4
         else if (pantalla == 12 && mouseX > 400 && mouseX < 520 && mouseY > 350 && mouseY < 400) {
    pantalla = 13;
    cambio = 0; }
               else if (pantalla == 12 && mouseX > 400 && mouseX < 520 && mouseY > 420 && mouseY < 470 ) {
    pantalla = 14;
    cambio = 0; }
    // decisiones 5
    
             else if (pantalla == 13 && mouseX > 400 && mouseX < 520 && mouseY > 420 && mouseY < 470) {
    pantalla = 14;
    cambio = 0; }
                 else if (pantalla == 14 && mouseX > 400 && mouseX < 520 && mouseY > 350 && mouseY < 400 ) {
    pantalla = 13;
    cambio = 0; }
    
     else if (pantalla == 14 && mouseX > 400 && mouseX < 520 && mouseY > 420 && mouseY < 470 ) {
    pantalla = 15;
    cambio = 0; }
   else if (pantalla == 15 && mouseX > 100 && mouseX < 675 && mouseY > 15 && mouseY < 865) {
    pantalla = 16;
    cambio = 0; }
    // final
 else if (pantalla == 16 && mouseX > 100 && mouseX < 675 && mouseY > 15 && mouseY < 865) {
    pantalla = 0;
    cambio = 0; }
    // creditos
      if (pantalla == 0 && mouseX > 150 && mouseX < 270 && mouseY > 520 && mouseY < 570) {
    pantalla = 17;
    cambio = 0; }
     else if (pantalla == 17 && mouseX > 100 && mouseX < 675 && mouseY > 15 && mouseY < 865) {
    pantalla = 18;
    cambio = 0; } 
    
    
  }
