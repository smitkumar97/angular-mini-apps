import { Component, signal } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '../custom/select/select.component';

@Component({
  selector: 'app-home',
  imports: [
    CalculatorComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectComponent,
  ],
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

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      country: [''],
      name: '',
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

  onSubmit() {
    console.log(this.form.value);
  }
}
