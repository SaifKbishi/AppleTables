const router = require('express').Router();
const courses = require('../controllers/course.controller');

//create a new course
router.post('/', courses.createCourse);

//retrieve all courses
router.get('/', courses.findAll);


module.exports = router;