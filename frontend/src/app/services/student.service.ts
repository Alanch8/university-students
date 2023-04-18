import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../models/IStudent';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  URL_API = 'http://localhost:3000/api/students/';

  selectedStudent: IStudent = {
    name: '',
    surname: '',
    age: 0,
    email: '',
    gender: ''
  };
  students: IStudent[] = [];
  
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<IStudent[]>(this.URL_API);
  }

  createStudent(student: IStudent) {
    return this.http.post(this.URL_API, student);
  }

  putStudent(student: IStudent) {
    return this.http.put(this.URL_API + `${student._id}`, student);
  }
  
  deleteStudent(_id: string) {
    return this.http.delete(this.URL_API + `${_id}`);
  }
}
