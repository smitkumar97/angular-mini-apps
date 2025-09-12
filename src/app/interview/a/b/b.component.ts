import { Component } from "@angular/core";

@Component({
  selector: "app-b",
  imports: [],
  templateUrl: "./b.component.html",
  styleUrl: "./b.component.scss",
})
export class BComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("B");
  }
}
