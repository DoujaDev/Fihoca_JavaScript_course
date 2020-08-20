// tipado por inferencia
var a = 10;
// tipado "clasico"
var b;
b = 100;
// tipado de las funciones....
var funcion1 = function () {
    return 100;
};
var funcion2 = function (p1, p2, p3, p4) {
    return "texto";
};
funcion2(10, true, 100, 100);
funcion2(10, false, "dfsfrd", "fdfd");
funcion2(NaN, true, true, "texto");
// El segundo parámetro es opcional...
var funcion3 = function (p1, p2) {
    return "hola";
};
funcion3(10);
funcion3(10, 20);
// funcion3(10,20,30); NO COMPILA
//funcion3(10,"texto");  NO COMPILA
