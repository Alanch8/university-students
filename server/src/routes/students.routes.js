const { Router } = require('express');
const router = Router();

const studentsController = require('../controllers/students.controller.js');

// CRUD - Create, Read, Update, Delete
router.get('/', studentsController.getStudents); // Read
router.post('/', studentsController.createStudent); // Create
router.get('/:id', studentsController.getStudent); // Read
router.put('/:id', studentsController.editStudent); // Update
router.delete('/:id', studentsController.deleteStudent); // Delete

module.exports = router