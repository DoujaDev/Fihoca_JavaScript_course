// La creación de un "reloj" con literales no es la solución buena
// Deberíamos poder crear relojes mediante una función constructora

var reloj = {

    totalSegundos: 0,
    sentido : 1,
    interval_UID: undefined,

    // Los métodos del objeto reloj NO PUEDE SER "big arrow"! El this se perdería!
    // Os he informado mal. Sorry!
    // Si utilizaramos una función constructora, en ese contexto sí que sería cierto!
    
    start: function() {

        var self = this;

        // Aquí sí funciona => como función anónima
        // Es el lugar adecuado para escribir este tipo de funciones
        this.interval_UID = setInterval(() => {

            var horas =     ("0" + Math.floor(self.totalSegundos / 3600)).slice(-2);
            var minutos =   ("0" + Math.floor(self.totalSegundos % 3600)).slice(-2);
            var segundos =  ("0" + Math.floor(self.totalSegundos % 60)).slice(-2);
            
            console.log("reloj: " + horas + ":" + minutos + ":" + segundos);

            self.totalSegundos += self.sentido;

        }, 1000);

    },

    pause: function() {
        clearInterval(this.interval_UID);
    },

    resume: function() {
        this.start();
    },

    reset: function() {
        this.totalSegundos = 0;
    },

    inverse: function() {
        this.sentido *= -1; // cambio el signo... 1,-1, 1,-1, 1,-1.....
    }
}