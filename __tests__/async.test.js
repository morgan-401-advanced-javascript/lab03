const readAsync = require('../lib/async.js');

describe('can asyncronously read files', ()=>{
  it('test', ()=>{
    expect(readAsync(true)).toBeTruthy();

  });


});