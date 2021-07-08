const mongoose = require('mongoose');

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
   courseid: Number,
   code: String,
   name: String,
   subname: String,
   subnameinarabic: String,
   cityname: String,
   year: Number,
   project: String,
   studentnum: Number,
   teachers:  String,
  })
);

module.exports = Course;