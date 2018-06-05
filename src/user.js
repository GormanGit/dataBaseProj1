const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: String
});

//'user' is what the collection is named. User means the entire collection and not a single user.
const User = mongoose.model('user', UserSChema);

module.exports = User;
