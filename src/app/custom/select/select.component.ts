import { CommonModule, JsonPipe } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-select',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() options: { label: string; value: any }[] = [];
  @Input() label?: string;

  value: any = '';
  disabled = false;

  constructor() {}

  ngOnInit(): void {
    console.log('SelectComponent options:', this.options);
  }
  onChange = (value: any) => {};
  onTouched = () => {};

  // Called by Angular to set the value from the form model
  writeValue(value: any): void {
    this.value = value;
  }

  // Angular gives us the callback to call when our value changes
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Angular gives us the callback to call when the control is touched
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Optional: handle disabled state
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Called when the user selects a new value
  onSelect(event: Event): void {
    const newValue = (event.target as HTMLSelectElement).value;
    this.value = newValue;
    this.onChange(newValue); // notify Angular
  }
}
