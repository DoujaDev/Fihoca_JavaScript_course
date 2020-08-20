var var1 = "hola"  //habito global esta disponible en cualquiere sitio

function doSomething(){
    var var2 = "adios" // habito local var2 sólo es accesible dentro de la función 
}


//no existe habito de bloque
if(true){
    var var3 =2
}

console.log(var3);

function myF(){
    var var4 = 44;
    console.log(var1); // esta variable no es la variable golbal  
    console.log(var4);
    var var1="soy una variable interna";
    console.log(var1);
}


function makeFunc(){
    var message ="local message";
    function displayMessage(){
        alert(message);
    }
    return displayMessage;
}

// cuando una función devuelve otra función displayMessage, la función de vuelta siempre
// tiene acceso(vínculo) a la función que devuelve la función makeFunc y  a sus variables de la función  
var myFunc =makeFunc();
myFunc();