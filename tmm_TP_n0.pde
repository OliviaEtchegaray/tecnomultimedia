PImage imagen; 
void setup () {
  imagen = loadImage ("imagenretrato.jpeg") ;
size (800,400);
background(162, 210, 211);
}
void draw () {
   image(imagen,400, 0, 400, 400);
//Pelo 
stroke ( 15, 14, 14) ;
fill (41 ,32, 32) ;
ellipse (175, 155, 310, 315) ;
ellipse (225, 155, 310, 315) ;
rect (20, 170, 180, 210);
rect (200, 170, 180, 210);
// Modificacion del fondo 

// Cuello
stroke (232, 227, 213) ;
fill (237, 231, 215) ;
rect (125, 300, 150, 120) ; 
fill (152, 146, 130);
rect (125, 280, 150, 60) ;
// Cabeza
stroke (232, 227, 213) ;
fill (237, 231, 215) ;
ellipse (200, 175, 310, 315);
// Nariz, Pecas y Rubor
fill (152, 146, 130);
ellipse (200, 210, 10, 15);
fill (62, 26, 3);
ellipse (180, 195,2,2) ;
ellipse (190, 180,2,2) ;
ellipse (170, 185,2,2) ;
ellipse (235, 185,2,2) ;
ellipse (200, 195,2,2) ;
ellipse (210, 180,2,2) ;
ellipse (220, 195,2,2) ;
fill (237, 151, 129);
ellipse (120,210,70,65);
ellipse (285,210,70,65);
// Ojos
fill (39,9, 1);
ellipse (260, 130, 25, 50);
ellipse(150, 130, 25, 50);
// Cejas

//Boca
fill (0, 0, 0);
ellipse (200, 270, 2, 2);
// Nombre
fill (255, 255, 255);
textSize (50);
text("Olivia", 25, 400); 
}
