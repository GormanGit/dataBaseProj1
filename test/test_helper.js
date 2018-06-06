//before we can make use of installed packages in node we must require it!
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done) => {
  //connect to localhost
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    //once that connection is open inform mocha that we are ready to go to next test
  //event handler..once means watch for mongoose to emit an event called open. one time. and when that happens run the function
  .once('open', () => { done(); })
  //watch for mongoose to emit an event called error and when it does run this function. both open and error are in mongoose lib.
  .on('error', (error) => {
    console.warn('Warning', error);
  });
});


//this runs before each test which clears out the collection!
beforeEach((done) => {
  mongoose.connection.collections.users.drop(()=>{
    //Ready to run the next test!
    done();
  });
})




