// cualquiera funcion invocada con new para crear un objeto

function Cliente (id,nombre,apellido){
    this.id=id;
    this.nombre=nombre;
    this.apellido = apellido;
    this.showName = function(){
        console.log(this.nombre+ " " + this.apellido);
    }

}

var c1 = new Cliente(101,"hayat","Zeta");
var c2 = new Cliente(102,"María","Hammdi");
c1.showName();
c2.showName();

