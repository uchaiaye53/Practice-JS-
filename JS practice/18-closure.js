function makeSequence(startingValue){
    let currentValue = startingValue || 0;

    function increment(lebel){
        return lebel + " : " + currentValue++;
    }
     return increment;
}

const s1 = makeSequence();

console.log('values s1: ');
console.log(s1("A"));
console.log(s1("B"));
console.log(s1("C"));


// const s2 = makeSequence(100);

// console.log('\n values s2: ');
// console.log(s2());
// console.log(s2());
// console.log(s2());


// console.log('\n values s1: ');
// console.log(s1());
// console.log(s1());
// console.log(s1());


