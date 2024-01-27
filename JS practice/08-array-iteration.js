//iteration over array
const temperatures = [30,35,34,31,30,40]

for(let i=0;i<temperatures.length;i++){
    console.log(temperatures[i]);
}
console.log();

//for of
for(let t of temperatures){
    console.log(t);
}
console.log();


//copy of an array
let t2 =[...temperatures, 70,80,60];
console.log(t2);
console.log(temperatures);
