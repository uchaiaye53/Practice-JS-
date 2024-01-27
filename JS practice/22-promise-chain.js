//import { map } from "lodash";

import pkg from 'lodash';
const { map } = pkg;

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const {readFile} = require('fs/promises');
const fetch = require("node-fetch");

readFile('sites.txt') // promise return kore koron ("fs/promises") library theke readFiles function ta neya
.then(function(content){
    const urls = content.toString("utf8").trim().split(/\r?\n/);
    console.log(`numbers of urls: ${urls.length}`);

    //return fetch(urls[0]);  // ei fetch abr promise obj return korbe

    //jodi son urls return korte chai to tokhn map function use krte hobe

    const promises = urls.map((u) => fetch(u));    //map function new array return kore
    return Promise.all(promises);   // Ei Promise hocche node er build in ekta object jeta proises 
                                   //array er protita promise resolve howar por response golor ekta array return kore
})
.then(function(responses){
    const statuses = responses.map(res => res.status);
    console.log(statuses);

    const textPromises = responses.map(res => res.text());
    return Promise.all(textPromises);
})
.then(function(contents){
    for( let content of contents){
        console.log(content.length);
    }
})
// .then(function(res){
//     console.log("Status: ",res.status);
//     return res.text();
// })
// .then(function(content){
//     console.log(content.length);
// })

console.log("After call to readFile");