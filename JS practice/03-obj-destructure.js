const person={
    name:'Murad takla',
    age: 35,
    married: false,
    cgpa:3.00,
    father: {
        name: 'Hasan takla',
        nid: 7897545197,
        occupation: 'govt job',
        age: 60
    },
    mother:{
        name: 'Arju begum',
        nid: 7897845197,
        occupation: 'housewife',
        age: 55
    },
    'ssc-year':2007
}

//console.log(person);

//case-1:
//we want to extract two properties into variables
const {name,married} = person;
console.log("person's name: "+ name +"...Is married??: "+married);

//case-2:
//we want to extract a property into a variable of a different name
const {age: ageOfPerson}=person;
console.log("persons age: "+ageOfPerson);

//case-3:
//extract nested properties
const{cgpa,mother:{nid}}=person;
console.log("CGPA: "+cgpa);
console.log("mother's nid: "+nid);

//case-4
//extract nested properties with different variable name
const{father:{ name: nameOfFather, age: ageOfFather }, mother:{ name: nameofMother, age: ageOfMother}} = person;
console.log(nameOfFather,ageOfFather);
console.log(nameofMother,ageOfMother);














