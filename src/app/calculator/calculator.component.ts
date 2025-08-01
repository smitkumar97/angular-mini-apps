import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-calculator",
  imports: [FormsModule],
  templateUrl: "./calculator.component.html",
  styleUrl: "./calculator.component.scss",
})
export class CalculatorComponent {
  display: string = "";
  sum = [];
  append(value: string) {
    this.display += value;
  }

  clear() {
    this.display = "";
  }

  deleteLast() {
    this.display = this.display.slice(0, -1);
  }

  calculate() {
    try {
      // this.display = eval(this.display);
      this.display = this.safeEval(this.display).toString();
    } catch {
      this.display = "Error";
    }
  }

  private safeEval(expr: string): number {
    const cleaned = expr.replace(/[^0-9+\-*/().]/g, "");
    return Function(`'use strict'; return (${cleaned})`)();
  }
}
