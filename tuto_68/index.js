// Here we are learning how to import and export modules in Js

console.log("This is index file where we are importing other modules");


const a = require("./mod.js");
// console.log(avera[2,5,6]);
// This is will not work


console.log("This is bocx of a ",a);  // This will show you [Function: avera]

// for using the module simply use the identifier which you use here i.e use avera   module.exports = avera


const avera = require('./mod.js');
console.log(avera);
// console.log(avera([2,5,6]));


// When createed object of export  called them using obj . key of dictionary
// const mo = require("./mod.js");
// console.log(mo.aveg([2,5,7]));
// console.log(mo.rrr);