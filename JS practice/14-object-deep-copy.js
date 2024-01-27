import { createRequire } from "module";
const require = createRequire(import.meta.url);

const lodash = require("lodash");

const student ={
    name: "Murad takla",
    grade: 10,
    age: 34,
    married: false,
    father: {
        name: "Hasan takla",
        nid: '1236783',
        age: 60,
        occupation: 'service holder',
    },
};

console.log("student: ", student);

//make a copy of a student object
 const studentCopy = {...student};  /// shallow copy using spread operator

// studentCopy.age = 40;

// console.log(student.age);
// console.log(studentCopy.age);


// //nested
studentCopy.father.age=80;
console.log("using normal spread operator:");
console.log(studentCopy.father.age); // ans will be 80
console.log(student.father.age);    // ans will be 80 // main obj ei change hoye jai
console.log();

/// deep copy of obj
const studentCopy2 = JSON.parse(JSON.stringify(student));

studentCopy2.father.age=90;
console.log("using JSON (deep copy):");
console.log(studentCopy2.father.age); // ans will be 90
console.log(student.father.age);    // ans will be 80 // sundor kaj kore but obj e jodi date deya thake,,thn aro kichu prob hoi JSON e
console.log();


// copy using librery ---lodesh
const studentCopy3 = lodash.cloneDeep(student);

studentCopy3.father.age=78;
console.log("using lodash library (deep copy):");
console.log(studentCopy3.father.age); // ans will be 78
console.log(student.father.age);    // ans will be 80 

