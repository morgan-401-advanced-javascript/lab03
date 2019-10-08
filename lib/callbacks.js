'use strict';

const fs = require('fs');
const util = require('util');
const faker = require('faker');
let path = process.argv.slice(2)[0];
let file = process.cwd()+`/data/${path}`;

const readMyFile = function(file, cb) {
  fs.readFile(file, 'utf8', function(err, content) {
    if (err) return cb(err, null);
    cb(null, content);
    console.log(content);
  });
};

readMyFile(file);

// function readContent(file, callback) {
//   fs.readFile(file, function (err, content) {
//     if (err) return callback(err);
//     callback(null, content);
//   });
// }

// readContent(function (err, content) {
//   console.log(content);
// });
// function callbackRead(file, cb) {

//   fs.readFile(file, (err, fileContents) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     // console.log('cb before', fileContents);
//     cb(file, data, (err, cb)=>{
//       if(err){
//         console.error(err);
//         return;
//       }
//       cb(writeThis(file, data));

//     });
//   });
// }



// function writeThis(file, data){
//   fs.writeFile((file, data, (err, cb)=>{
//     if(err){
//       console.error(err);
//     }
//     cb(
//     data = JSON.parse(data);
//     data.firstName = faker.name.firstName();
//     data= JSON.stringify(data);
//     console.log('cb after', JSON.parse(data));
//     return data;
//     )
//   });
// }
// callbackRead(file, writeThis());
// function callbackWrite(file){



// }
// callbackRead(file, ()=>{
//   callbackWrite(file);
// });
// callbackWrite(file);
module.exports = readMyFile;