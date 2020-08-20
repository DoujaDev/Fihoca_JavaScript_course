/* Reloj 6

    Crear la clase "Reloj" para instanciar relojes. 
    
    El reloj deberá lanzar un custom event ('timeGoesBy') cada segundo.

*/

class Reloj {

    constructor(nombre){
        this.name = nombre;
        this.interval_ID = undefined;
        this.totalSeconds = 0;
        this.direction = 1;
    }

    start() {
        this.interval_ID = setInterval(() => {
        
            let event = new CustomEvent('timeGoesBy', {
                detail: {
                    horas: Math.floor(this.totalSeconds / 3600),
                    minutos: Math.floor(this.totalSeconds / 60 % 60),
                    segundos: Math.floor(this.totalSeconds % 60),
                    clockName: this.name
                }
            });

        // lanzamos evento...
        window.dispatchEvent(event);

        this.totalSeconds += this.direction;
    
        }, 1000);
    }

    pause() {
        clearInterval(this.interval_ID);
        delete this.interval_ID;
    }

    resume() {
        if (!this.interval_ID) {
            this.start();
        }
    }

    reset() {
        this.totalSeconds = 0;
    }

    changeDirection() {
        this.direction *= -1;   //conmuta 1,-1, 1, -1...
    }
};