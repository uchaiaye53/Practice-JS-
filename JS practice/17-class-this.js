//class in js 

// js e class holo obj er template,,, jeta diyr obj er intense create kora jbe

class Car{

    // js e class field
    wheels = 4;
  
    constructor(brand,model){
        this.brand = brand;  // this hocche obj er
        this.model = model;
        //this.printName = this.printName.bind(this);  // included with another good solution
    }

    // printName(){
    //     console.log(this.brand + ' : ' + this.model+ ' wheels: '+ this.wheels);  // this hochhe contructor er
    // }

    // printName = function(){   // giving the function as field
    //     console.log(this.brand + ' : ' + this.model+ ' wheels: '+ this.wheels);  // this hochhe contructor er
    // }

    // arrow funtion akare
    printName = () => {   // giving the function as field
        console.log(this.brand + ' : ' + this.model+ ' wheels: '+ this.wheels);  // this hochhe contructor er
    }

    getName = () => 'brand name: ' + this.brand;
}

const car1 = new Car("Toyota", 2014);
const car2 = new Car('Nissan', 2016);

// car1.printName();
// car2.printName();

// ekhn jdi setTimeout er moto funtion use kori tw error asbe eikhne
setTimeout(car1.printName,2000);  //setTimeout(funtion,time in ms)  // output = undefined : undefined

// // solution with bind() ,,,bt not a good solution
// setTimeout(car1.printName.bind(car1), 2000);

// // one of good solution
// setTimeout(function(){
//     car1.printName();
// }, 4000);


//another solution is use bind() in constructor

//  this.printName = this.printName.bind(this);

setTimeout(car2.printName, 6000);

console.log(car2.getName());
