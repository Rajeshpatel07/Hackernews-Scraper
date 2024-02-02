const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Db Connected successfully"))
.catch(()=> console.log("DB Connection failed"))

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

module.exports = mongoose.model('Users', UserSchema)