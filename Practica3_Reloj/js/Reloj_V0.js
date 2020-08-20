//console.log("Reloj");

var segundos = 0;
var minutos = 0;
var horas = 0;
var interval_ID;



function init(){
    
    interval_ID = setInterval(function(){
    segundos++;
        
        
        console.log(("0"+ horas).slice(-2) +":" + ("0"+ minutos).slice(-2) + ":" + ("0"+ segundos).slice(-2));
        if(segundos==59){
            segundos=0;
            minutos++;
        }
        if(minutos==60){
            minutos=0;
            horas++;
        }
        if(horas==24){
            horas=0;
        }
    },1000);
}

function close(){
    clearInterval(interval_ID);
    segundos = 0;
    minutos = 0;
    horas = 0;

}

function resume(){
    init();
}

function pause(){
    clearInterval(interval_ID);
}
