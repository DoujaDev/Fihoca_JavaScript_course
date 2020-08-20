/* Reloj 2

    Crear un reloj "objeto" haciendo uso de literales.

    El reloj deberá pintar el tiempo cada segundo por consola en el formato hh:mm:ss:

    Ejemplo:   01:20:05

    El reloj dispondrá de los siguientes métodos:

        1.- start()             Inicia el reloj desde 00:00:00
        2.- pause()             Pausa el reloj
        3.- resume()            Reanuda el reloj (manteniendo la dirección en que estaba)
        4.- reset()             Resetea el reloj a 00:00:00
        5.- changeDirection()   Conmuta la dirección del reloj

*/

var reloj = {

        totalSeconds: 0,
        interval_ID: undefined,
        direction: 1,

        start: () => {
          
            this.interval_ID = setInterval(function() {
            
            let horas =   ("0" +  Math.floor(this.totalSeconds / 3600)).slice(-2);
            let minutos = ("0" +  Math.floor(this.totalSeconds / 60 % 60)).slice(-2);
            let segundos =("0" +  Math.floor(this.totalSeconds % 60)).slice(-2);

            console.log(horas + ":" + minutos + ":" + segundos);

            this.totalSeconds += this.direction;
         
          }, 1000);
        },

        pause: () => {
          clearInterval(this.interval_ID);
          delete this.interval_ID;
        },

        resume: () => {
          if (!this.interval_ID) this.start();
        },

        reset: () => {
          this.totalSeconds = 0;
        },

        changeDirection: () => {
            this.direction *= -1;
        }
    };