console.log("Works!!");

function start(){
    for(let i = 0;i < 999; i++){
        console.log(i + ": "+ convert(i));
    }
}

function convert(numero){
    console.log(numero);
    var CENTENAS = ["","","doscientos","trescientos","cuatrocientos","quinientos","seiscientos","setecientos","ochocientos","novecientos"];
    var DECENAS = ["","diez","","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
    var UNIDADES = ["","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"];
    var EXCEPCIONES = ["once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve","veinte","veintiuno","veintidos","veintitres","veinticuatro","veinticinco","veintiseis","veintisiete","veintiocho","veintinueve"];
    
    
    if(numero == 0){
        return "cero";
    }

    if(numero == 100){
        return "cien";
    }

    var C = Math.floor(numero / 100);
	var D = Math.floor((numero % 100) / 10);
    var U = Math.floor(numero % 10);

    var resultado = CENTENAS[C] + " ";

    var DU = D * 10 + U;

    if(DU > 10 && DU < 30){
        resultado += EXCEPCIONES[DU-11];
    }else{
        var conector = (U == 0 || D == 0) ? "" : " y "; 
        resultado += DECENAS[D] + conector + UNIDADES[U];
    }
    return resultado;
}