const roles=['admin','user','viewer','guest'];

// take the first role, indexed
const firstRole=roles[0];
console.log(firstRole);

// destructure to extract the first two roles
const [adminName,username]=roles;
console.log('admin name:'+adminName);
console.log('user name: '+username);
console.log();

// destructure in paramiters
function printFirstElementAndRestElement([firstElement, ...rest]){
    console.log("first element: ",firstElement);
    console.log('rest of the elements: ',rest);
    console.log();
}

printFirstElementAndRestElement(roles);

// destructure 3rd index
function callThirdElement([_1st, _2nd, third]){  //_ use krsi kothao use hobe na tai or [ , , third] evabe o deya jai
    console.log('Third element is', third);
}

callThirdElement(roles);


