console.log("prueba AJAX");
//var pais = prompt("indica el pais")
var myRequest = new XMLHttpRequest();

myRequest.onreadystatechange = function() {

    if(myRequest.readyState ===4){
        //console.log(myRequest.responseText);
        var datos_1 = eval(myRequest.responseText);
        console.log(datos_1);

        consolelog("JSON.parse");
        var datos_2 = JSON.parse(myRequest.responseText);
        console.log(datos_2);
    }
}

myRequest.open("GET", "https://restcountries.eu/rest/v2/name/spain", true);

myRequest.send(null);
