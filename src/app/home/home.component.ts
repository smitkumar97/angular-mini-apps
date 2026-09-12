import { Component, computed, signal } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CalculatorComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  count = signal(0);
  form: FormGroup;
  options = [
    { label: 'USA', value: 'us' },
    { label: 'Canada', value: 'ca' },
    { label: 'India', value: 'in' },
  ];

  firstName = signal('');
  lastName = signal('');

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      country: [''],
      name: '',
      dob: [new Date()],
    });
  }

  ngOnInit(): void {
    this.count.set(1);
  }

  increment() {
    this.count.update((c) => c + 1);
  }

  decrement() {
    this.count.update((c) => c - 1);
  }

  doubleCount = computed(() => this.count() * 2);

  fullName = computed(() => {
    return `${this.firstName()} ${this.lastName()}`.trim();
  });

  isFormValid = computed(() => {
    return this.firstName().length > 0 && this.lastName().length > 0;
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
