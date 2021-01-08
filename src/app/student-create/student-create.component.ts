import { Component, OnInit } from "@angular/core";
import { HomeServiceService } from "./../home-service.service";


@Component({
  selector: "app-student-create",
  templateUrl: "./student-create.component.html",
  styleUrls: ["./student-create.component.css"]
})
export class StudentCreateComponent implements OnInit {
  student: { id; name; description; email; } = {
    id: "",
    name: "",
    description: "",
    email: ""
  };

  constructor(private homeservice: HomeServiceService) {}

  ngOnInit() {}
  

  onSubmit(data) {
    this.homeservice.createStudent(data);
    console.log(data);
  }
}
