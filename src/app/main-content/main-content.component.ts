import { Component, OnInit } from '@angular/core';

interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
}
@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  students: Array<IStudent> = [];
  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'David',
      lastName: 'Vang',
      course: 'Programming'
    }
    this.students[1] = {
      id: 1,
      firstName: 'Johnny',
      lastName: 'Appleseed',
      course: 'Farming'
    }
    this.students[2] = {
      id: 1,
      firstName: 'Joe',
      lastName: 'Schmo',
      course: 'Accounting'
    }
    this.students[3] = {
      id: 1,
      firstName: 'Mary',
      lastName: 'Poppins',
      course: 'Art'
    }
  }
  ngOnInit() {
  }
  addStudent() {
    const student: IStudent = {
      id: 1,
      firstName: 'Michael',
      lastName: 'Jordan',
      course: 'Basketball'
    };
    this.students.push(student);
  }
}
