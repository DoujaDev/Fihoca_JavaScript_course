// se puede llamar a una función de un objeto
var person = {
    name:"elvis",
    sing: function(){
        console.log("lalalla");
    }
};
person.sing();

// llamar al método show dará un error porque show no tiene acceso al Text
var message ={
    text:"msg",
    show:function(){
        alert(text);
    }
};

//solución: this que es el propio objeto que es el llamador de la función 
//by default represents the calling object for a function
// in the global scope this represents the global object(window in web browser)


// pruebas 

console.log("Global this" + this);

var message = {
    text:"Hello everybody I'm a JavaScript program",
    show:function(){
        console.log(this.text);
        console.log("this dentro de un objeto, caller" + this);
    }
};

message.show();