/*

    Ejercicio 1

    Crear una función que devuelva el número de carácteres de un string

*/

function contarCaracteres(texto){
    return texto.length;
}

// Probamos la funcion....

var numeroCaracteres = contarCaracteres("pepín");
console.log('"pepin" tienen ' + numeroCaracteres + ' caracteres'); // debe devolver 5


/*

    Ejercicio 2

    Crear una función que devuelva un string en mayúscula

*/

/*

    Ejercicio 3

    Crear una función que recibe tres parámetros: nombre, apellido1 y apellido2

    Devuelve: El nombre en formato "apellido1 apellido2, nombre"

    Ojo!Una persona extranjera no se apellida "undefined"
    Ojo!Controlar que no venga el segundo apellido!

*/

/*

    Ejercicio 4

    Crear una función que recibe un parámetro. Se espera un string.

    Devuelve: 

    - si el argumento no es string devuelve el mensaje "error"
    - si el argumento es un string, devuelve el string invertido

    ejemplo: "hola" -> "aloh"

*/

/*

    Ejercicio 5

    Crear una función que recibe un array. Se espera que el array sólo contenga numeros.

    Devuelve: 

    - si alguno de los elementos del array no es un número, devuelve NaN
    - si todos los elementos del array son números devuelve la suma de todos ellos.

    ejemplo:    [1,2,2,5,6] -> 16
                [2,"pepe",45] -> NaN
*/

/*

    Ejercicio 6

    Crear una función que recibe number.

    Devuelve: 

    - si el argumento no es number, devuelve el string "error"
    - si el argumento es un number, se redondea a entero por arriba y se devuelve un string indicando si es "par" o "impar"

    ejemplo:    1.2 -> "impar"
                7.1 -> "par"
                "pepe" -> "error"
*/

/*

    Ejercicio 7

    Crear una función que no recibe parámetros.

    Devuelve: 

    - el número de argumentos que le hemos pasado
    

    ejemplo:    funcion7() -> 0
                funcion7("pepe",null) -> 2
                funcion7(1,1,1,1,1,1,1,1,1,undefined) -> 10
*/




















