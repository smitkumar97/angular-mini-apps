import { Component } from "@angular/core";

@Component({
  selector: "app-c",
  imports: [],
  templateUrl: "./c.component.html",
  styleUrl: "./c.component.scss",
})
export class CComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("C");
  }
}
