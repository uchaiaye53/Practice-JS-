//regular functions
const actors=[
    {
        name:'salman Shah',
        dob: new Date(Date.UTC(1971,8,19)),
    },
    {
        name:'Abdur Rajjak',
        dob: new Date(Date.UTC(1942,0,23)),     //UTC te month 0 mane january bujhai
    },
    {
        name:'Ananta Jalil',
        dob: new Date(Date.UTC(1978,3,17)),
    },
];

function calculateAgeAtPresent(dob){
    const today = new Date();

    const nowMonth = (today.getUTCFullYear() - 1900) * 12 + today.getUTCMonth();
    const dobMonth = (dob.getUTCFullYear() - 1900) * 12 + dob.getUTCMonth();

    const diffOfMonth = nowMonth - dobMonth;

    const year = Math.floor(diffOfMonth/12);
    const month = diffOfMonth - (year * 12);

    return [year, month];

}

// for(let people of actors){
//     console.log(people.name+"'s age is ",calculateAgeAtPresent(people.dob));

//     console.log();

//     const [year,month] = calculateAgeAtPresent(people.dob);
//     console.log(people.name+ "'s age is: "+ year +" years and "+month+" month");

//     console.log();
// }


// annonymous function

function printAge(actor,ageCalculator){  // actor-obj and agecalculator-function  parameter hisebe
    const [year,month] = ageCalculator(actor.dob);
    console.log(`${actor.name} : ${year} years`);
}


for(let a of actors){
    //printAge(a,calculateAgeAtPresent);

    printAge(a, function (dob){           // annonymous function
        const today = new Date();
    
        const nowMonth = (today.getUTCFullYear() - 1900) * 12 + today.getUTCMonth();
        const dobMonth = (dob.getUTCFullYear() - 1900) * 12 + dob.getUTCMonth();
    
        const diffOfMonth = nowMonth - dobMonth;
    
        const year = Math.floor(diffOfMonth/12);
        const month = diffOfMonth - (year * 12);
    
        return [year, month];
    
    }
    );
}


