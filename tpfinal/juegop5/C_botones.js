class Boton {
  static botones = [];

  constructor(x, y, ancho, alto, texto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.texto = texto;
    Boton.botones.push(this); 
  }

  mostrar() {
    fill(222, 222, 222); 
    rect(this.x, this.y, this.ancho, this.alto); 
    fill(28, 80, 118); 
    textSize(16);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  Click() {

    return mouseX > this.x && mouseX < this.x + this.ancho &&
           mouseY > this.y && mouseY < this.y + this.alto;
  }
// CREO BOTONES
 static CrearBotones() {
    this.boton1 = new Boton(width - 180, height - 40, 120, 30, "INICIAR");
    this.boton2 = new Boton (width - 180, height - 75, 120, 30, "SIGUIENTE");
    this.boton3 = new Boton(width - 180, height - 180, 120, 30, "ACEPTAR");
    this.boton4 = new Boton(width - 180, height - 145, 120, 30, "RECHAZAR");
    this.boton5 = new Boton(width - 180, height - 130, 120, 30, "IR");
    this.boton7 = new Boton(width - 180, height - 40, 120, 30, "HUIR");
    this.boton8 = new Boton(width - 180, height - 115, 120, 30, "VOLVER");
    this.boton9 = new Boton(width - 180, height - 115, 120, 30, "QUEDARME");
    this.boton10 = new Boton(width - 180, height -90, 120, 30, "REINICIAR");
this.boton11 = new Boton(width - 180, height - 75, 120, 30, "IR AL PRINCIPE");
   
  } }
