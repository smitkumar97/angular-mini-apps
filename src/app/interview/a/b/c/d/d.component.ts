import { Component } from "@angular/core";
import { UserService } from "../../../../../services/user.service";

@Component({
  selector: "app-d",
  imports: [],
  templateUrl: "./d.component.html",
  styleUrl: "./d.component.scss",
})
export class DComponent {
  name = "";

  constructor(private userService: UserService) {
    this.userService.firstName.subscribe((value) => (this.name = value));
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("D");
  }
}
