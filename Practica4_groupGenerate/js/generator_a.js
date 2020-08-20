
function saludar(){
    console.log("HOLA");
    var size = document.getElementById("sizeGroup").value;
    var name = document.getElementById("groupName").value;
    var members = document.getElementById("members").value.split(",");

    var outuput = JSON.stringify(generateGroups(size,name,members)) ;

    document.getElementById("resultado").innerHTML = outuput;
    
    
}
function generateGroups(groupSize,groupName,members){
    
    var members = members.sort(() => Math.random() - 0.5);
    var aux = {};
    var group = [];
    var nombreGrupo = undefined;
    var contadorGrupo = 0;

   
    members.forEach(miembro => {
        nombreGrupo = groupName + " " + contadorGrupo
        group.push(miembro);
        if (group.length == groupSize) {  			// si se completa un grupo...
            aux[nombreGrupo] = group;				// añadimos grupo en la estructura	
            group = [];
            contadorGrupo++; 			            // creamos un nuevo grupo
        }
    });
    
    nombreGrupo = groupName + " " + contador

    while (group.length != 0) {						// mientras haya un grupo con miembros sobrantes
        aux[nombreGrupo].push(group.pop());		// sacamos miembro del grupo y lo redistribuimos
    }
    
    console.log(aux)

    return aux;
}

