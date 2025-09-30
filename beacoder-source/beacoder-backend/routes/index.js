const router = require('express').Router();

router.use('/auth', require("./auth.routes"));
router.use('/admin', require("./admin.routes"));
router.use('/courses', require("./course.routes"));
router.use('/courses/:courseId', require("./quiz.routes"));


module.exports = router