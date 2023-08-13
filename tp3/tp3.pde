// Video de YT: https://youtu.be/BhJkiDvk6EM


int pantalla= 0;
PImage[] imagenes = new PImage[20];
PImage[] botones = new PImage[12];
int cant = 12;
PFont fuente ;
int num = 50; 
String [] textos = new String [56];
int ancho=450;
int largo=400;
int cambio = 0;

//imagenes 

void setup() {
  size(600,600);
  for (int i=0; i<20; i++) {
    imagenes[i] = loadImage("imagenes/i" + i +".jpg");
    for (int x=0; x<cant; x++) {
      botones[x] = loadImage("botones/b"+ x + ".png");
      fuente= loadFont("BellMT-48.vlw");
  textos = loadStrings("textos.txt");
} } }

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
  text( textos[0],110,50);
  text(textos[1],250,80);
  image(imagenes [1], 90, 100, 425, 400);
  image(botones[1], 350, 520, 120, 50);
  image(botones [0], 150, 520, 120, 50);} 

// pantalla 1
 else if(pantalla==1){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [4], 80, 100, 450, 400);
  image(botones [2], 250, 520, 120, 50);
text(textos[10],20,50);
text (textos[11],20,70);}

// pantalla 2 
 else if(pantalla==2){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [5], 80, 100, 450, 400);
 image(botones [3], 250, 520, 120, 50);
text(textos[13],20,30);
text(textos[14],20,50);
text(textos[15],20,70);}

// pantalla 3
 else if(pantalla==3){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [6], 80, 100, 450, 400);
  image(botones [4], 400, 420, 120, 50);
text(textos[17],50,50);}

// pantalla 4 
 else if(pantalla==4){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes[7], 80, 100, 450, 400);
 image(botones [2], 250, 520, 120, 50);
text(textos[18],50,50);
text(textos[19],50,70);}

// pantalla 5
 else if(pantalla==5){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [8], 80, 100, 450, 400);
 image(botones [3], 400, 420, 120, 50);
  image(botones [10], 400, 350, 120, 50);
text(textos[21],50,50);
text(textos[22],50,70);}

// pantalla 6
 else if(pantalla==6){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [9], 80, 100, 450, 400);
 image(botones [5], 400, 420, 120, 50);
  image(botones [6], 400, 350, 120, 50);
text(textos[24],50,50);}

// pantalla 8
 else if(pantalla==8){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [11], 80, 100, 450, 400);
  image(botones [11], 250, 520, 120, 50);
text(textos [26],50,50);
text(textos [39],300,90);}


// pantalla 7
 else if(pantalla==7){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [10], 80, 100, 450, 400);
  image(botones [2], 250, 520, 120, 50);
text(textos [28],50,50);
text(textos [29],50,70);}

// pantalla 9
 else if(pantalla==9){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [12], 80, 100, 450, 400);
 image(botones [8], 400, 420, 120, 50);
  image(botones [5], 400, 350, 120, 50);
text(textos [31],50,50);}

// pantalla 10
 else if(pantalla==10){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [13], 80, 100, 450, 400);
  image(botones [2], 250, 520, 120, 50);
text(textos [32],20,30);
text(textos [33],20,50);
text(textos [34],20,70);}

// pantalla 11
 else if(pantalla==11){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [14], 80, 100, 450, 400);
  image(botones [11], 250, 520, 120, 50);
text(textos [36],50,30);
text(textos [37],50,50);
text(textos [39],300,90);}

// pantalla 12

 else if(pantalla==12){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [15], 80, 100, 450, 400);
 image(botones [4], 400, 420, 120, 50);
  image(botones [8], 400, 350, 120, 50);
text(textos [41],50,30);
text(textos [42],50,50);
text(textos [43],50,70);}

// pantalla 13
 else if(pantalla==13){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [17], 80, 100, 450, 400);
 image(botones [4], 400, 420, 120, 50);
text(textos [45],50,50);}

// pantalla 14
 else if(pantalla==14){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes[16], 80, 100, 450, 400);
 image(botones [5], 400, 420, 120, 50);
  image(botones [8], 400, 350, 120, 50);
text(textos [47],25,50);}

// pantalla 15
 else if(pantalla==15){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [18], 80, 100, 450, 400);
    image(botones [2], 250, 520, 120, 50);
text(textos [49],50,50);}

// pantalla 16 FINAL
 else if(pantalla==16){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes[19], 80, 100, 450, 400);
    image(botones [11], 250, 520, 120, 50);
text(textos [51],50,50);}

// primeras dos pantallas arregladas 
// pantalla 1.2
 else if(pantalla==18){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [2], 80, 100, 450, 400);
  image(botones [2], 250, 520, 120, 50);
text(textos[3],20,30);
text(textos[4],20,50);
text(textos[5],20,70);}

 // pantalla 2.2 
 else if(pantalla==19){ 
background(235, 235, 242);
 fill(26, 26, 28);
  textSize(22);
  image(imagenes [3], 80, 100, 450, 400);
  image(botones [2], 250, 520, 120, 50);
text(textos[7],20,50);
text (textos[8],20,70);}

// pantalla de creditos 

else if(pantalla==17)
{ fill(250);
  textSize(30);
  text(textos [53],220,50);
  text(textos [55],65,100);
  text(textos [56],65,130);
  image(botones [1], 250, 520, 120, 50);
   image(imagenes [1], 130, 165, 325, 300);}
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
