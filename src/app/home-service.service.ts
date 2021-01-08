import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HomeServiceService {
  students = [
    {
      id: 101,
      name: "Alex",
      description: "Alex Details",
      email: "alex@xyz.com"
    },
    {
      id: 201,
      name: "Anupam",
      description: "anupam Details",
      email: "anupam@xyz.com"
    },
    {
      id: 101,
      name: "Amit",
      description: "Amit Details",
      email: "amit@xyz.com"
    },
    {
      id: 101,
      name: "Shivam",
      description: "Shivam Details",
      email: "shivam@xyz.com"
    }
  ];

  constructor() {}
  public getStudents(): Array<{ id; name; description; email }> {
    return this.students;
  }

  public createStudent(students: { id; name; description; email }) {
    this.students.push(students);
  }
}
