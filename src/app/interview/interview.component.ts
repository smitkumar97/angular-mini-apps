import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-interview",
  imports: [CommonModule, FormsModule],
  templateUrl: "./interview.component.html",
  styleUrl: "./interview.component.scss",
})
export class InterviewComponent {
  name = "Smit";

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("Interview");
  }

  updateName() {
    this.userService.updateName(this.name);
  }
}
