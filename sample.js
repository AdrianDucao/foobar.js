const foobar = require('./index.js');

let fname = foobar.firstName('female');
let lname = foobar.lastName();
let phoneUS = foobar.phoneNumber('US');
let phonePH = foobar.phoneNumber('PH');
let Country = foobar.country();
let province = foobar.province(); //no parameter
let specProvince = foobar.province(Country); //with parameter

console.log("Complete Name: "+fname +" "+ lname);
console.log("US Phone#:"+ phoneUS);
console.log("PH Phone#:"+ phonePH);
console.log("Country: "+Country);
console.log("Specific Province/State: "+specProvince);
console.log("");
console.log("Random Province/State: "+province);
