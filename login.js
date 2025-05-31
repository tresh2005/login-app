const mongoose = require('mongoose');
const LoginSchema = new mongoose.Schema({
  f_userName: String,
  f_Pwd: String,
});
module.exports = mongoose.model('Login', LoginSchema);
