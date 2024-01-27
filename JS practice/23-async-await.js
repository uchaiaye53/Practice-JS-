import { createRequire } from "module";
const require = createRequire(import.meta.url);

const {readFile} = require('fs/promises');
const fetch = require("node-fetch");

async function process(){
    const content = await readFile('sites.txt');

    const urls = content.toString("utf8").trim().split(/\r?\n/);
    console.log(`numbers of urls: ${urls.length}`);

    // for(let i=0;i<urls.length;i++){
    //     const res = await fetch(urls[i]);
    //     console.log(`result of fetching: ${urls[i]} : ${res.status}`);
    // }   

    try{
        const promises = urls.map(u => fetch(u));
    const results =  await Promise.all(promises);

    const statuses = results.map(res => res.status);
    console.log(statuses);
    }catch(e){
        console.log(e);
    }
    
}

process().then(function(){
    //do nothing  
    // ide k thanda rakhar jonno,,,as await funtion always ekta promise retun kore,,r 
    //promise age await authoba pore then call krtei hoi
    // 2 tar ekta krtei hoi,,tai then hoda call diye rakhsi
});

console.log("After call to readFile");