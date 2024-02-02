const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const UserSchema = new mongoose.Schema({
  user: {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    }
  }
}, { timestamps: true })

export const Users = mongoose.model('Users', UserSchema)
