function Reloj(nombre){
    
    this.nombre = nombre;
    this.totalSegundos = 0;
    this.interval_ID = undefined;
    this.sentido = 1;

    this.start = function(mensaje){

        if (mensaje !== "FROM_RESUME"){
            this.totalSegundos = 0;
        }

        this.interval_ID = setInterval(() => {

            let horas =     ("0" +  Math.floor(this.totalSegundos / 3600)).slice(-2);
            let minutos =   ("0" +  Math.floor(this.totalSegundos / 60 % 60)).slice(-2);
            let segundos =  ("0" +  Math.floor(this.totalSegundos % 60)).slice(-2);
        
            console.log(this.nombre + ": " + horas + ":" + minutos + ":" + segundos + "    [interval_ID: " + this.interval_ID + " sentido: " + this.sentido + "]");

            this.totalSegundos += this.sentido;

        },1000);
    };

    this.stop = function(){
        this.totalSegundos = 0;
        clearInterval(this.interval_ID);
        this.interval_ID = undefined;
    };

    this.pause = function(){
        clearInterval(this.interval_ID);
    };

    this.resume = function(){
        if(this.interval_ID !== undefined){
            this.start("FROM_RESUME");
        } else {
            console.log(this.nombre + " está en STOP!");
        }
        
    };

    this.invert = function(){
        this.sentido *= -1; //conmuta 1,-1,1,-1,...
    }

}