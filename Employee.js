const mongoose = require('mongoose');
const EmployeeSchema = new mongoose.Schema({
  f_Image: String,
  f_Name: String,
  f_Email: { type: String, unique: true },
  f_Mobile: String,
  f_Designation: String,
  f_gender: String,
  f_Course: [String],
  f_Createdate: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Employee', EmployeeSchema);
