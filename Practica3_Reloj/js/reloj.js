

/*
var totalSeconds = 0;


var interval_ID = setInterval(function(){

    let horas =     ("0" +  Math.floor(totalSeconds / 3600)).slice(-2);
    let minutos =   ("0" +  Math.floor(totalSeconds / 60 % 60)).slice(-2);
    let segundos =  ("0" +  Math.floor(totalSeconds % 60)).slice(-2);

    console.log(horas + ":" + minutos + ":" + segundos);
    totalSeconds++;
}, 1000);

console.log("interval_ID: " + interval_ID);
console.log("Para 'matar' el reloj ----> clearInterval(" + interval_ID + ");");
*/

reloj = {

    totalSeconds : 0,
    interval_ID : undefined,
    direction: 1,

    start: function() {

        //this.totalSeconds = 0;

        this.interval_ID = setInterval(() => {
         
            let horas =     ("0" +  Math.floor(this.totalSeconds / 3600)).slice(-2);
            let minutos =   ("0" +  Math.floor(this.totalSeconds / 60 % 60)).slice(-2);
            let segundos =  ("0" +  Math.floor(this.totalSeconds % 60)).slice(-2);
        
            console.log(horas + ":" + minutos + ":" + segundos);
            console.log(this.totalSeconds);
            this.totalSeconds += this.direction;
            if(this.totalSeconds<0){
                this.stop();
                console.log("stop");
                var audio = new Audio('js/beep.mp3');
                audio.play();
            }
           
        }, 1000);
    },

    invert:function() {

        this.direction *= -1;

    },

    stop :function(){
        clearInterval(this.interval_ID);
        this.segundos = 0;
        this.minutos = 0;
        this.horas = 0;


    },

    pause :function(){
        clearInterval(this.interval_ID);

    },

    resume :function(){
        if(!this.interval_ID){
            console.log("No has inicializado el reloj!");
        }
        else{
            this.start();
        }
    },
    


    
   

}