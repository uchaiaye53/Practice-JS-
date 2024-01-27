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
    },  //trailing coma
};

//print students name only
function printName({name}){
    console.log("students name: "+ name);
    console.log();
};

printName(student);

//print basic info of a student
function basicInfo({name,father:{name: fathersName}}){
    console.log(name +"'s"+ ' father name is '+ fathersName);
    console.log();
}

basicInfo(student);

//trailing coma concept bola hoise

// arrayte o trailing coma use hoi
const rolls =[
    {
        name:'Tanveer',
        title:CEO
    },
    {
        name:'Masum',
        title:'CTO'
    }, //trailing coma
];