# foobar.js
Random fake data generator for test and development purposes.

## Installation
```javascript
npm i foobar.js
```

## Adding Module
```javascript
const foobar = require('foobar.js');
```
## Usage
```javscript
let fname = foobar.firstName('female');
let lname = foobar.lastName();
```

## Functions
|example           |Description|
|------------------|-----------|
|.firstName('type')|generates ```male``` or ```female``` firstnames|
|.lastname()       |generates lastname|
|.phoneNumber('country')    | can generate data specific phone number based on location i.e. ```US```, ```PH```|
|.country()|generates random country|
