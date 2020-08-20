var createGroups = function(grouspSize, groupName, members){

    var remaining = members.length % grouspSize;
    var numberOfGroups = Math.floor(members.length / grouspSize);
    var groups = []

    shuffle(members);

    console.log(members);

    for (let i = 0; i < numberOfGroups; i++){

        var group = [];

        for (let j = 0; j < grouspSize; j++){

            var k = i * grouspSize + j;
            group.push(members[k]);

        }
        
        groups.push(group);

    }

    k++;

    for (let n = 0; n < remaining; n++){

        groups[n].push(members[k+n]);

    }

    for(let p = 0; p < numberOfGroups; p++){

        console.log(groupName + "_" + p + ": " + groups[p]);
    }

}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}