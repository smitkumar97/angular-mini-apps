import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-date-picker',
  imports: [CommonModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ],
})
export class DatePickerComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  @ViewChild('input', { static: true }) inputRef!: ElementRef<HTMLInputElement>;
  @Input() label?: string;
  @Input() dateFormat = 'Y-m-d';

  private picker: flatpickr.Instance | undefined;
  private onChange = (value: any) => {};
  private onTouched = () => {};
  disabled = false;

  ngOnInit() {
    this.picker = flatpickr(this.inputRef.nativeElement, {
      dateFormat: this.dateFormat,
      onChange: (selectedDates: Date[]) => {
        const date = selectedDates[0] ?? null;
        this.onChange(date);
      },
      onClose: () => this.onTouched(),
    });
  }

  writeValue(value: any): void {
    if (this.picker) {
      this.picker.setDate(value, false);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (this.inputRef) {
      this.inputRef.nativeElement.disabled = isDisabled;
    }
  }

  ngOnDestroy(): void {
    if (this.picker) {
      this.picker.destroy();
    }
  }
}
