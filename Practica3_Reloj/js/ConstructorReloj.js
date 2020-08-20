function Reloj(nombre){
    this.nombre = nombre;
    this.totalSeconds = 0;
    this.interval_ID = undefined;
    this.direction= 1;

    this.start= function() {

        //this.totalSeconds = 0;

        this.interval_ID = setInterval(() => {
         
            let horas =     ("0" +  Math.floor(this.totalSeconds / 3600)).slice(-2);
            let minutos =   ("0" +  Math.floor(this.totalSeconds / 60 % 60)).slice(-2);
            let segundos =  ("0" +  Math.floor(this.totalSeconds % 60)).slice(-2);
        
            console.log("Reloj: "+ this.nombre + "  ==>  " + horas + ":" + minutos + ":" + segundos);
            //console.log(this.totalSeconds);
            this.totalSeconds += this.direction;
            if(this.totalSeconds<0){
                this.stop();
                console.log("stop");
                var audio = new Audio('js/beep.mp3');
                audio.play();
            }
           
        }, 1000);

    };


    this.invert=function() {

        this.direction *= -1;

    };

    this.stop = function(){
        clearInterval(this.interval_ID);
        this.segundos = 0;
        this.minutos = 0;
        this.horas = 0;


    };

    this.pause = function(){
        clearInterval(this.interval_ID);

    };

    this.resume =function(){
        if(!this.interval_ID){
            console.log("No has inicializado el reloj!");
        }
        else{
            this.start();
        }
    };
    


    
}
var reloj1 = new Reloj("Rolex");
var reloj2 = new Reloj("Casio");

