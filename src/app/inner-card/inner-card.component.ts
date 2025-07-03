import { Component, Input } from "@angular/core";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { UserService } from "../services/user.service";
import { ChipModule } from "primeng/chip";

@Component({
  selector: "app-inner-card",
  imports: [CardModule, ButtonModule, ChipModule],
  templateUrl: "./inner-card.component.html",
  styleUrl: "./inner-card.component.scss",
})
export class InnerCardComponent {
  @Input() cardTitle: string = "";
  @Input() cardId: number = 0;
  constructor(private dataService: UserService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
