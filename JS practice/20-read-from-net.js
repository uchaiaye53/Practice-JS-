import { createRequire } from "module";
const require = createRequire(import.meta.url);

const fs = require('fs');
const request = require('request');

fs.readFile('sites.txt', function(err,data){
    if(err){
        console.log(err);
        return;
    }

    // console.log(data.toString("utf-8"));
    // console.log();

    const uris = data.toString("utf8").trim().split(/\r?\n/);

    console.log("numbers of urls: "+ uris.length);

    for(let i=0;i<uris.length;i++){
        const uri = uris[i];
        request(uri,function(error,response,body){
            if(error){
                console.log(`error in request for URI ${i}`,error);
                return;
            }

            console.log(`Got response for the URI ${i} - ${uris[i]}, statusCode: ${response.statusCode}, lenght: ${body.length}`);
        });
    }
});

console.log("After call to fs funtion");
console.log();