console.log("works!!")
/*
A JavaScript Callback Function is a function that is passed as a parameter
 to another JavaScript function, and the callback function is run inside of
 the function it was passed into.JavaScript Callback Functions can be used 
 synchronously or asynchronously.
*/
var a = 100;
// The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

console.log("setTimeout*******************************");

setTimeout(function(){
    console.log(a);
    console.log("han pasado 4 segundos");
},4000)

console.log("2");

/*
The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed with the idInterval.
*/
console.log("setInterval******************************");
var intervalId = setInterval(function(){
    console.log(Math.random()*10);
},500);


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