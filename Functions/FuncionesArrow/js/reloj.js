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

//solución: this que es el propio objeto que es el caller

var message ={
    text:"Hello everybody I'm a JavaScript program",
    show:function(){
        alert(this.text);
    }
};

message.show();