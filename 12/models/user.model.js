// const mongoose = require("mongoose");


// const userSchema = mongoose.Schema({
//   email: {
//     type: String,
//     require: true
//   },
//   password: {
//     type: String,
//     require: true
//   },
//   createdOn: {
//     type: Date,
//     default: Date.now
//   }
// })


// module.exports = mongoose.module("user", userSchema);










//database encription authentication

const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

const encKey = process.env.ENC_KEY;
userSchema.plugin(encrypt, {
  secrect: encKey,
  encryptedFields: ["password"]
});


module.exports = mongoose.module("user", userSchema);