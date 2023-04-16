const studentController = {}

const Student = require('../models/Student')

studentController.getStudents = async (req, res) => {
    const students = await Student.find()
    res.json(students)
}
studentController.createStudent = async (req, res) => {
    const newStudent = new Student(req.body)
    await newStudent.save()
    res.send({ message: 'Student created' })
}
studentController.getStudent = async (req, res) => {
    const student = await Student.findById(req.params.id)
    res.send(student)
}
studentController.editStudent = async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body)
    res.json({ status: 'Student updated' })
}
studentController.deleteStudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id)
    res.json({ status: 'Student deleted' })
}

module.exports = studentController