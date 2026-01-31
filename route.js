const express = require('express');
const router = express.Router();

const control = require('../Controller/control');
const middle = require('../Middleware/middle');

router.get('/', middle.logger, control.getStudents);
router.post('/add', middle.logger, control.addStudent);
router.put('/update/:id', middle.logger, control.updateStudent);
router.delete('/delete/:id', middle.logger, control.deleteStudent);

module.exports = router;