const name = 'kotha alam';
const profession = 'student';
const age = 24;

//create an object with individual property assignment
const student ={};

student.nameOfStudent = name;   //simple
student['occupation'] = profession;   //string property name
const fileName = 'ageOfStudent';
student[fileName] = age;   //dynamic property name

console.log(student);

//create an object
const person = {
    name: name,
    occupation: profession,
    age: age
}
console.log(person);

//short hand form
const qkperson = {
    name,
    occupation: profession,
    age
}
console.log(qkperson);

//dynamic property name
const nameField = 'name';
const jobField = 'occupation';
const ageField = 'age';

const dynamicPerson ={
    [nameField]: name,
    [jobField]: profession,
    [ageField]: age
}
console.log(dynamicPerson);
