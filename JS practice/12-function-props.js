// function properties

function calculateAgeAtPresent(dob){
    const today = new Date();

    const nowMonth = (today.getUTCFullYear() - 1900) * 12 + today.getUTCMonth();
    const dobMonth = (dob.getUTCFullYear() - 1900) * 12 + dob.getUTCMonth();

    const diffOfMonth = nowMonth - dobMonth;

    const year = Math.floor(diffOfMonth/12);

    if(calculateAgeAtPresent.yearOnly){
        return year;
    }

    const month = diffOfMonth - (year * 12);

    return [year, month];

}


// js e function obj er moto o kaj kore,,means property rakha jai

calculateAgeAtPresent.yearOnly = false;
const dob = new Date(Date.UTC(1971,8,19));
console.log(calculateAgeAtPresent(dob));


calculateAgeAtPresent.yearOnly = true;
const dob2 = new Date(Date.UTC(1942,0,23));
console.log(calculateAgeAtPresent(dob2));
