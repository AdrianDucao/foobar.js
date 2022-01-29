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
|.phoneNumber()    |generates random 11 digit phone number|
