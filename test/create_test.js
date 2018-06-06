
//purpose of this file is to make sure we can create a new user and save it to our database.
//must have require assert in order to use an assertion
const assert = require('assert');
const User= require('../src/user');
//top level describe function. the purpsose of the string is just to modify the testing feedback that we get from mocha.


describe('Create records', () =>{
  it('saves a user', ()=> {
    //assertion something to compare one value to another and have mocha tell us pass or fail.
  const joe = new User({name: 'Joe'});

  joe.save();
  })

})
