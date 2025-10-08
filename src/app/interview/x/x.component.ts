import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-x",
  imports: [],
  templateUrl: "./x.component.html",
  styleUrl: "./x.component.scss",
})
export class XComponent {
  data: any;

  constructor(private api: UserService) {}

  ngOnInit() {
    this.api.getData().subscribe((res) => {
      this.data = res.products;
    });
  }
}
