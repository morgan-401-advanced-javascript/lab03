'use strict';

const fs = require('fs');
const async = require('./lib/async.js');
const callbacks = require('./lib/callbacks.js');
const promises = require('./lib/promises.js');

let file = `${__dirname}/data/person.json`;

let showFileContents = (err, data) => {
  if(err){throw err;}
  console.log(data);
};

// async(file, showFileContents);
callbacks(file, showFileContents);
promises(file, showFileContents);