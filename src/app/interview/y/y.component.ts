import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-y",
  imports: [JsonPipe],
  templateUrl: "./y.component.html",
  styleUrl: "./y.component.scss",
})
export class YComponent {
  data: any;

  constructor(private api: UserService) {}

  ngOnInit() {
    this.api.getData().subscribe((res) => {
      this.data = res.products;
    });
  }
}
