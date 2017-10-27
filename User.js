const mongoose = require('mongoose');

const User = mongoose.model('User', {
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age: Number,
  hobbies: String,
  bio: String
});

module.exports = User;
