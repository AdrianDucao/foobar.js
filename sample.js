const foobar = require('./index.js');

let fname = foobar.firstName('female');
let lname = foobar.lastName();
let phone = foobar.phoneNumber();

console.log("Complete Name: "+fname +" "+ lname);
console.log("10 digit phone#: "+ phone);