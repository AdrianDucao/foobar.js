const foobar = require('./index.js');

let fname = foobar.firstName('female');
let lname = foobar.lastName();
let phoneUS = foobar.phoneNumber('US');
let phonePH = foobar.phoneNumber('PH');

console.log("Complete Name: "+fname +" "+ lname);
console.log("US Phone#:"+ phoneUS);
console.log("PH Phone#:"+ phonePH);