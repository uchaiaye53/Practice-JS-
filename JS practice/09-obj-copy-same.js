let carOne ={
    brand: "Toyota",
    model: 2012
}
// console.log(carOne);
// console.log();

// let carTwo = carOne;
// carTwo.model=2020;
// console.log(carTwo);
// console.log(carOne);    // carTwo te change er karone carOne e o change hochhe ekhne


// //mutation in function, adding property
// function processCar(car){
//     console.log(car);
//     car.color = 'white';
//     processCarWithColor(car);
// }

// function processCarWithColor(car){
//     console.log(car.color);
// }

// processCar(carOne);
// console.log(carOne); // carOne e o chang hoye gese .... eijonno copy korar dorkar hoi new kono obj e


// using spread(...) operator for copy an obj
function processCar(car){
    let carWithColor = {...car, color:'blue'};
    processCarWithColor(carWithColor);
}

function processCarWithColor(car){
    console.log(car);
}

processCar(carOne);
console.log(carOne); // carOne e o chang hoye gese .... eijonno copy korar dorkar hoi new kono obj e
