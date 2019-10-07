'use strict';

const fs = require('fs');
const util = require('util');

const promise = util.promisify(fs.readFile);

function readPromise(file){
  return promise(file)
    .then(data => console.log(data.toString().trim()))
    .catch(error => error);
}

module.exports = readPromise; 