const foobar = require('./index.js');

let randomName = foobar.firstName();
let genderSpecificName = foobar.firstName('female');
let lastName = foobar.lastName();
let phoneUS = foobar.phoneNumber('US');
let phonePH = foobar.phoneNumber('PH');
let Country = foobar.country();
let province = foobar.province(); //no parameter
let specProvince = foobar.province(Country); //with parameter

console.log("Random Name: "+randomName);
console.log("Gender Specific Name: "+genderSpecificName);
console.log("Lastname: "+lastName);
console.log("US Phone#:"+ phoneUS);
console.log("PH Phone#:"+ phonePH);
console.log("Country: "+Country);
console.log("Specific Province/State: "+specProvince);
console.log("");
console.log("Random Province/State: "+province);
console.log("alternative use case for specific state/province: "+foobar.province(foobar.country()));
