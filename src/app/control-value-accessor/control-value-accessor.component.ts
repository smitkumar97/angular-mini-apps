import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '../custom/select/select.component';
import { DatePickerComponent } from '../custom/date-picker/date-picker.component';

@Component({
  selector: 'app-control-value-accessor',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectComponent,
    DatePickerComponent,
  ],
  templateUrl: './control-value-accessor.component.html',
  styleUrl: './control-value-accessor.component.scss',
})
export class ControlValueAccessorComponent {
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
      dob: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
          console.log('Form submitted:', this.form.value);
        } else {
          this.form.markAllAsTouched();
        }
  }
}
