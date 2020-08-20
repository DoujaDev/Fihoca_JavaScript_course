/* Crear un reloj en la consola...

00:00:00
00:00:01
00:00:02
.
.
.
00:00:59
00:01:00
.
.
.

*/


function reloj(){
    var segundos=0;
    var minutos=0;
    var horas=0;

    var a = setInterval(function(){
 
       if(segundos > 59){
           minutos++;
            segundos=0;
       }

       if(minutos > 59){
           horas++;
           minutos=0;
       }

       segundos = (segundos <= 9) ? "0"+segundos : segundos ;
       minutos = ("0"+minutos).slice(-2);
       horas = ("0"+horas).slice(-2);

        console.log(horas+":"+minutos+":"+segundos);
        segundos++;
    },1000)
}

reloj();

