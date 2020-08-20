/* Reloj 3

    Crear la función constructora "Reloj(nombre)" para instanciar relojes.

    El reloj se crea mediante la función constructora pasándole como parámetro un nombre.

        Ejemplo: let r1 = new Reloj('Longines');

    El reloj deberá pintar el tiempo cada segundo por consola en el formato: nombre (hh:mm:ss):

        Ejemplo:   Longines (01:20:05)

    El reloj dispondrá de los siguientes métodos:

        1.- start()             Inicia el reloj desde 00:00:00
        2.- pause()             Pausa el reloj
        3.- resume()            Reanuda el reloj (manteniendo la dirección en que estaba)
        4.- reset()             Resetea el reloj a 00:00:00
        5.- changeDirection()   Conmuta la dirección del reloj
*/

function Reloj(nombre){

  this.name = nombre;
  this.interval_ID = undefined;
  this.totalSeconds = 0;
  this.direction = 1;

  this.start = function() {
    var self = this;
    this.interval_ID = setInterval(function() {
        
        let horas =   ("0" +  Math.floor(self.totalSeconds / 3600)).slice(-2);
        let minutos = ("0" +  Math.floor(self.totalSeconds / 60 % 60)).slice(-2);
        let segundos =("0" +  Math.floor(self.totalSeconds % 60)).slice(-2);

        console.log(self.name + " (" + horas + ":" + minutos + ":" + segundos + ")");

        self.totalSeconds += self.direction;
    
    }, 1000);
  };

  this.pause = function() {
    clearInterval(this.interval_ID);
    delete this.interval_ID;
    
  };

  this.resume = function() {
    if (!this.interval_ID) {
      this.start();
    ;
    }
  };

  this.reset = function() {
    this.totalSeconds = 0;
  };

  this.changeDirection = function() {
    this.direction *= -1;   //conmuta 1,-1, 1, -1...
  };

};