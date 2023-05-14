// Hola profe, disculpe por la nota aparte. Hice el trabajo con todas las consignas que pidio, 3 pantallas con imagen, texto y animacion 
// las cuales transicionan de manera automatica y textos de inicio y reinicio los cuales funcionan. Mi problema fue el tiempo en el que una pantalla
// pasa a la otra, estas tardan como 5s de mas lo cual no pude arreglar pero al estar las consignas del trabajo aplicadas, lo entrego asi de igual forma 
// esta es una nota simplemente para aclarar que las transiciones si estan hechas, es solo cuestion de esperar, gracias. 
// Variables
int pantalla= 0;
int x =150;
int y =10;
int ancho=350;
int largo=300;
int cambio = 0;
int MovX= 0;
int MovY=-800; 
int negativo;
PImage i1, i2, i3, i4, i5, i6 ;
PFont fuente ;


// imagenes 
void setup(){
size(640,480);
i1= loadImage("Catstart.png");
i2= loadImage("Electric Dress.jpg");
i3= loadImage("electronic hallway.jpg");
i4= loadImage("DarkMatter.jpg");
i5= loadImage("Image5.jpeg");
i6= loadImage("reinicio.png");
fuente= loadFont("BellMT-48.vlw");
frameRate(60);
}

void draw() {
background(211, 211, 211);
println(frameRate);
textFont(fuente);

//inicio

if(pantalla==0){
  
  frameRate(60);
  fill(85, 39, 58);
  ellipse(mouseX,mouseY,15,15);
  fill(250);
  textSize(45);
  text("Click para comenzar",140,400);
  image(i1, 140, 50, ancho, largo);
} 

// primer obra (1)


 else if(pantalla==1){ 
background(211, 211, 211);
  image(i2, MovX++*2/3, y, ancho, largo);
  textSize(20);text("ELECTRIC DRESS \n Artista:Atsuko Tanaka \n Año: 1965 \n Fue expuesto usado en 1965 y reconstruido en 1985 \n Ubicacion actual: Museo de Arte Contemportaneo \n  en Tokyo", MovX++,340);
cambio= cambio+1;
if (cambio>=650){ pantalla = pantalla+1;
cambio=0; MovX=0;}
  
}
else if(pantalla==2){
  background(211,211,211);
  negativo= 670-MovX++;
 image(i3, x, MovY++*3/2, ancho, largo);
textSize(25);text("SUPERCARRETERA ELECTRONICA \n Artista : Nam June Paik  \n Año: 1995 \n Ubicada en el Museo Smithsoniano de Arte Americano",MovY++,200);
cambio= cambio+1;
if (cambio>=1200){ pantalla = pantalla+1; MovX=0;
cambio=0;}
}

else if (pantalla==3){
background(211,211,211);
negativo= 690-MovX++;
image(i4,negativo, y, ancho, largo);
  textSize(25);text(" MATERIA OSCURA \n Artista:Paul Friedlander \n Año: 1998 \n Obra que fue expuesta en El Salón de \n la Ciencia de Nueva York",MovX++-600,340);
cambio= cambio+1;
if (cambio>=660){ pantalla = pantalla+1;  
cambio=0;}
}
else if(pantalla==4){
  background(211,211,211);
  cambio=0;
  image(i5, 150, 50, 338, 338);
  image(i6, 380,120,150,150);
  fill(255,255,255);textSize(35);text("Gracias Por Su Atención :)", 150,400);
    if (mouseX > 380 && mouseX < 530 && mouseY > 120 && mouseY < 270 && mousePressed) {
  pantalla = 0;  
frameRate(60); }
  
} 
}
// click para el inicio y pantallas
void mousePressed() {
  if (pantalla == 0 && mouseX > 170 && mouseX < 475 && mouseY > 115 && mouseY < 365) {
    pantalla = 1;
    cambio = 0;
    MovX = 0; // reiniciar MovX
  } else if (pantalla == 1 && mouseX > 80 && mouseX < 240 && mouseY > 100 && mouseY < 200) {
    pantalla = 2;
    cambio = 0;
    MovX = 0; // reiniciar MovX
  } else if (pantalla == 2 && frameCount >= 2000 ) {
    pantalla = 3;
    cambio = 0;
    MovX = 0; // reiniciar MovX
  } else if (pantalla == 3 && frameCount >= 600) {
    pantalla = 4;
    cambio = 0;
  } else if (pantalla == 4 && mouseX > 380 && mouseX < 530 && mouseY > 120 && mouseY < 270 && mousePressed) {
    pantalla = 0;
    cambio = 0;
    MovX = 0;
    MovY = -800;
  } else if (pantalla == 2 && mouseX > 540 && mouseX < 620 && mouseY > 20 && mouseY < 80 && mousePressed) {
    pantalla = 0;
    cambio = 0;
    MovX = 0;
    MovY = -800;
  }
}
