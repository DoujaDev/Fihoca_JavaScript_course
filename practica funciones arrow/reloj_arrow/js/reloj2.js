// Refactorizar el código para que todas las funciones
// sean =>

// OJO! el método start ya no necesitará del "self"....

var reloj = {

    totalSegundos: 0,
    sentido : 1,
    interval_UID: undefined,

    start: function(){

        var self = this; // OJO! Esto ya no será necesario
        
        this.interval_UID = setInterval(function(){

            var horas =     ("0" + Math.floor(self.totalSegundos / 3600)).slice(-2);
            var minutos =   ("0" + Math.floor(self.totalSegundos % 3600)).slice(-2);
            var segundos =  ("0" + Math.floor(self.totalSegundos % 60)).slice(-2);
            
            console.log("reloj: " + horas + ":" + minutos + ":" + segundos);

            self.totalSegundos += self.sentido;

        }, 1000);

    },

    pause: function(){
        clearInterval(this.interval_UID);
    },

    resume: function(){
        this.start();
    },

    reset: function(){
        this.totalSegundos = 0;
    },

    inverse: function(){
        this.sentido *= -1; // cambio el signo... 1,-1, 1,-1, 1,-1.....
    }
}