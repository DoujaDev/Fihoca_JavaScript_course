// formas de declarar funciones 

1//
var sumar = function(operando1,operando2){

   return  operando1 + operando2
}

2// tambien sumar2 es un variable
function sumar2(operando1,operando2){

    return operando1 + operando2;
}


function sumar3(){
    console.log(sumar3.length);
    var resultado = 0;
    for(let i =0; i < arguments.length; i++){
        resultado += arguments[i];
    }
    return resultado;
}

// esta declaracion no vale porque las funciones se comportan como variables.
function read(){
    console.log("mesage");
}

// esta si 
function read(myMesage){
    console.log(myMesage);
}

read("hello");
read();