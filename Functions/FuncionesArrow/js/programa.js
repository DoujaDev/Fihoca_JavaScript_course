//funciones arrow

//function anonima
/* var myFunction1= function(){
"hi";
}*/
//función no devuelve nada
var myFunction1 = () =>"hola";

//función que devuelve algo
/* var myFunction2 = function(p1){
return p1;
}*/
var myFunction2 = (p1) => p1.toUpperCase();

// función con body
/*var myFunction3 = function(p1,p2){
    console.log(p1);
    console.log(p2);
    return p1+p2;
}*/

var myFunction3 = (p1,p2) =>{
    console.log(p1);
    console.log(p2);
    return p1+p2;
}

//devolver un objeto
/* var myFunction4 = function(){
    return {x:1,y:2}
}*/ 

var myFunction4 = ()=> ({x:1,y:2});