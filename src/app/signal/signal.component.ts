import { Component, computed, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { KebabcasePipe } from "../shared/pipes/kebabcase.pipe";

@Component({
  selector: 'app-signal',
  imports: [ButtonModule, KebabcasePipe],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent {
  firstName = signal('John');
  lastName = signal('Doe');

  name = computed(() => `${this.firstName().toUpperCase()} ${this.lastName().toUpperCase()}`);
  
  get fullName() {
    return `${this.firstName()} ${this.lastName()}`;
  }

  uppercase() {
    this.firstName.update((name) => name.toUpperCase());
    this.lastName.update((name) => name.toUpperCase());
  }
}
