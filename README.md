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
|.firstName(```param```)|generates random or specific ```male``` or ```female``` firstnames|
|.lastname()       |generates lastname|
|.phoneNumber(```param```)    | can generate data specific phone number based on location i.e. ```US```, ```PH```|
|.country()|generates random country|
|.province(```param```)|can generate specific state by puting variable from .country() as its parameter or leave it bnalk for random province/state|
