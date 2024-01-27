//object iteration

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
    mother: {
        name: "Anju begum",
        nid: '1336782',
        age: 55,
        occopation: 'housewife',
    },
    'ssc-year': 2010,
};


// for in
for(let key in student){
    console.log(key); 
    
}