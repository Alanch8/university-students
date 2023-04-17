import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { NgForm } from '@angular/forms';
import { IStudent } from 'src/app/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  constructor(public studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }

  getStudents() {
    this.studentService.getStudents().subscribe({
      next: (res) => {
        this.studentService.students = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  addStudent(form: NgForm) {
    if (form.value._id) {
      this.studentService.putStudent(form.value).subscribe({
        next: (res) => {
          this.getStudents();
          form.resetForm();
        },
        error: (err) => {
          console.error(err);
        },
      });
    } else {
      this.studentService.createStudent(form.value).subscribe({
        next: (res) => {
          this.getStudents();
          form.resetForm();
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  deleteStudent(id: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.studentService.deleteStudent(id).subscribe({
        next: (res) => {
          this.getStudents();
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  editStudent(student: IStudent) {
    this.studentService.selectedStudent = student;
  }
}
