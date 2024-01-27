const student = {
    name : "Uchaiaye marma",
    age: 23,
    married: false,
    father:{
        name: "Umongprue marma",
        age:48
    },
    mother:{
        name :"Umayching marma",
        age:45
    },
    'ssc-year':2015
};


//when the property name is not a valid JS variable name
console.log("students ssc passing year "+student['ssc-year']);

//when the property name in dynamic
const selectedParent = 'mother';
console.log("coming parent name: "+ student[selectedParent].name);
console.log(student['age']);

//obj er property 2 vabe access krte pari 1=> dot(.) notation diye, 2=> arry([]) sign diye

