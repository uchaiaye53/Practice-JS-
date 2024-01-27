import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require('fs');

fs.readFile('sites.txt', function(err,data){
    if(err){
        console.log(err);
        return;
    }

    const content = data.toString("utf8");

    console.log(content);
    console.log();
});

console.log("After call to fs funtion");
console.log();