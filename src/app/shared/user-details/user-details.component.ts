import { Component } from "@angular/core";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { Router } from "@angular/router";
import { Chip } from "primeng/chip";

@Component({
  selector: "app-user-details",
  imports: [CardModule, ButtonModule, Chip],
  templateUrl: "./user-details.component.html",
  styleUrl: "./user-details.component.scss",
})
export class UserDetailsComponent {
  userData: any;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.userData = navigation?.extras.state?.["user"];
  }
}
