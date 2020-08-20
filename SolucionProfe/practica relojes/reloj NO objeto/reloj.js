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