import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-x",
  imports: [JsonPipe],
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
