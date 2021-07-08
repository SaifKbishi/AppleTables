const db = require('../models');
const Course = db.Course;

const createCourse = async (req, res)=>{

 if(!req.body.name){
  res.status(400).send({ message: "Content can not be empty!" });
    return;
 }

 const course = await Course(req.body);
 try{
  await course.save();
  res.status(201).send(course);
 }catch(error){
  console.log('could not create new Course');
  res.status(400).send(error);
 }

 // const course = new Course({
 //  courseid: req.body.courseid,
 //  code: req.body.code,
 //  name: req.body.name,
 //  subname: req.body.subname,
 //  subnameinarabic: req.body.subnameinarabic,
 //  cityname: req.body.cityname,
 //  year: req.body.year,
 //  project: req.body.project,
 //  studentnum: req.body.studentnum,
 //  teachers: req.body.teachers,
 // });

};

const findAll = async (req, res)=>{
 try{
  const allCourses = await Course.find({});
  res.status(200).send(allCourses);
 }catch(error){
  console.log('could not fetch all courses');
  res.status(400).send(error);
 }
};

exports.findOne = (req, res)=>{};

exports.update= (req, res)=>{};

exports.delete= (req, res)=>{};

exports.deleteAll= (req, res)=>{};

exports.findAllPublished= (req, res)=>{};

module.exports = {
 createCourse,
 findAll,
 // findOne,
 // update,
}