function print(){
    console.log(this.brand+' : '+this.model);  // this kono obj k bujhano hochhe,,jokhn j obj oi function k call dibe
}

const car1={
    brand: 'Toyota',
    model: 2012,
    color: 'red',
    printName: print,
    // printCar: function(){
    //     //console.log(this.brand+' : '+this.model);
    //     console.log(`${car1.brand} : ${car1.model}`);
    // },
}

const car2={
    brand: 'Nissan',
    model: 2016,
    color: 'blue',
    printName: print,
    // printCar: function(){
    //     console.log(car2.brand+' : '+car2.model);
    // },
}


// function printCarName(car){
//     console.log(`${car.brand} : ${car.model}`);
// }

// printCarName(car);

car1.printName();  
car2.printName();

//print();  /// ei jinish run korale error asbe,,,as ekhne bampase kono obj nai

//solution
const  q = print.bind(car1);  /// ei bind diye this er jonno auto obj add kora hoi
q();

car2.printName();