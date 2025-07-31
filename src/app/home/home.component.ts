import { Component, signal } from "@angular/core";
import { CalculatorComponent } from "../calculator/calculator.component";

@Component({
  selector: "app-home",
  imports: [CalculatorComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  count = signal(0);

  ngOnInit(): void {
    this.count.set(1);
  }

  increment() {
    this.count.update((c) => c + 1);
  }

  decrement() {
    this.count.update((c) => c - 1);
  }
}
