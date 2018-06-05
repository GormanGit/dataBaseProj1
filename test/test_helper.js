//before we can make use of installed packages in node we must require it!
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');

mongoose.connection
//event handler..once means watch for mongoose to emit an event called open. one time. and when that happens run the function
.once('open', () => console.log('good to go!'))
//watch for mongoose to emit an event called error and when it does run this function. both open and error are in mongoose lib.
.on('error', (error) => {
  console.warn('Warning', error);
});






