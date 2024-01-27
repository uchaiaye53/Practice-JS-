// const name="Nisu";
// const age = 22;
// const mejaj="khit khit";
// const personality = "motamoti";
// const relation = 'single';

// const name2="Tina"

// const person ={};

// person.name=name;
// person.herAge=age;
// person["occupation"] = mejaj;
// person.personality=personality;

// const status = "herRaletion";
// person[status]= relation;

// // console.log(person);


// // using shorthand
// const person2 = {
//     name: name2,
//     temper: mejaj,
//     age,
//     personality,
//     status : relation
// };

// console.log(person2);

// // obj er property access krbo function e

// function printName({name, age}){
//     console.log("persons name: " + name + " and age is "+age)
// }

// printName(person2);



// ..........array practice.............
const source = [1,2,3,4,5,6];

function printRest([firstElement,_secondElement,...rest]){
    console.log("print first: "+firstElement)
    console.log("print rest: "+rest);
    console.log("print rest: ",rest);
}

//printRest(source);

function printAvarageTemp(...temp){
    let sum = 0;
    // for(let t of temp){
    //    sum = sum +t;
    // }
    // console.log(sum/3);

    for(let i=0;i<temp.length;i++){
        sum=sum+temp[i];
    }
    let avg = sum/temp.length;
    console.log(avg);
    console.log(temp.length);
}

printAvarageTemp(30,40,60,40,60);


