
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { StyleClassModule } from "primeng/styleclass";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, NavbarComponent, StyleClassModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "AngularLab";
}
