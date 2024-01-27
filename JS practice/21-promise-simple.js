import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fetch = require('node-fetch');

console.log('fetching data');

// const promise = fetch("https://cdn.ckeditor.com/");

// promise.then(function(res){
//     console.log("status: "+res.status);
// });

//main promise syntex

fetch("https://cdn.ckeditor.com")
.then(function(res){
    console.log("status: ", res.status);
    return res.text()  // this line return a promise  
    // .then(function(content){
    //     console.log(content.length);
    // });
})
.then(function(content){      //call back hell problem dur kore and 1st promise(1st then kaj) resolve holei ei then e asbe
    console.log(content.length);
})
.catch(function(err){
    console.log(err);
});

console.log("after call to fetch");