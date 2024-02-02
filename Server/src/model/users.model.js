const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, 'password is mandatory']
  }
}, { timestamps: true })

const Users = mongoose.model('Users', UserSchema)

module.exports = Users;