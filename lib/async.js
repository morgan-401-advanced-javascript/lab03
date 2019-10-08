'use strict';

const fs = require('fs');
const util = require('util');
const faker = require('faker');
let path = process.argv.slice(2)[0];
let file = process.cwd()+`/data/${path}`;


const promise = util.promisify(fs.readFile);
const promisewrite = util.promisify(fs.writeFile);


async function readAsync(file){
  await promise(file)
    .then(data => {
      data = JSON.parse(data);
      console.log('async before', data);
      data.firstName = faker.name.firstName();
      data = JSON.stringify(data);
      promisewrite(file, data);
      console.log('async after', data);
    })
    .catch(error => error);
}
readAsync(file);
module.exports = readAsync;