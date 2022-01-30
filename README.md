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
|.firstName(```param```)|generates random with blank parameter or gender specific names by placing  ```'male'``` or ```'female'``` as parameters|
|.lastname()       |generates lastname|
|.phoneNumber(```param```)    | can generate random phone number with blank parameter or region specific phone number based on location i.e. ```'US'```, ```'PH'```|
|.country()|generates random country|
|.province(```param```)|can generate specific state by puting variable from ```.country()``` e.g. ```.province(variable)``` as its parameter or leave it blank for random province/state like so ```.province()```, another use case is to put the .country() to .province() parameter like so ```.province(foobar.country())```|
