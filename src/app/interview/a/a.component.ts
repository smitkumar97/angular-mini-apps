import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-a",
  imports: [],
  templateUrl: "./a.component.html",
  styleUrl: "./a.component.scss",
})
export class AComponent {
  data: any;

  constructor(private api: UserService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("A");
    this.data = this.api.getData();
  }
}
