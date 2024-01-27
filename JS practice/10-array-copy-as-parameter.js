const temp =[30,40,50,35,40];

function printTemp(temperature){
    for(let t of temperature){
        console.log(t);
    }
}

printTemp(temp);


// passing parameter
function printAll(firstElement,...rest){
    console.log(firstElement);
    console.log();
    for(let t of rest){
        console.log(t);
    }
}

printAll(1,2,'jodu','modhu');