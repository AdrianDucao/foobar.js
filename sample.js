const foobar = require('./index.js');

let fname = foobar.firstName('female');
let lname = foobar.lastName();
let phone = foobar.phoneNumber();

console.log(fname +" "+ lname);
console.log(phone);