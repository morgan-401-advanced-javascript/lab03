'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  } else {
    cb(undefined, new Buffer(fileContents));
    console.log();
  }
};
exports.writeFile = (file, buffer, cb)=>{
  if (file.match(/bad/i)){
    cb('invalid File');
  } else {
	  fileContents = buffer;

    cb(undefined, true);
  }
};