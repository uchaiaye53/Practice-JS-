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
    }
};

// console.log("student name: "+student.name);
// console.log("father: "+ student.father.name + ", mother: "+ student.mother.name);

//js e obj er propertyr value chng kra jai
student.name="Hlachaiaye marma";
student.age=14;

// obj e new property o add kra jai
student.school="BCPSC";
student.father.name="U M P";


console.log(student);


// js e key/property modify and add 2 tai kra jai