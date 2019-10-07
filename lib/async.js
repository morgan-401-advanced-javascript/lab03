'use strict';

const fs = require('fs');
const util = require('util');

function asyncGetData(data){
  return new Promise((resolve, reject)=>{
    console.log(data);
    resolve(data.toString().trim());
  });
}

async function grabData(){
  let data = await asyncGetData('testasync');
}
let Promise = grabData().catch(err => {
  console.log('async error');
});

module.exports = asyncGetData;