import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { UserService } from "../services/user.service";
import { AbstractControl, FormGroup, FormArray } from "@angular/forms";

type Area =
  | {
      type: "circle";
      radius: number;
    }
  | {
      type: "square";
      side: number;
    };

const shape1: Area = {
  type: "circle",
  radius: 5,
};

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

type PartialProduct = Partial<Product>; // All properties of Product are now optional

const productUpdate: PartialProduct = { price: 99.99, inStock: false }; // Valid, only a subset of properties
const newProduct: Product = {
  id: "abc",
  name: "Widget",
  price: 100,
  inStock: true,
}; // Original type still requires all properties

@Component({
  selector: "app-interview",
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./interview.component.html",
  styleUrl: "./interview.component.scss",
})
export class InterviewComponent {
  name = "Smit";
  form: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.form = this.fb.group({
      user: this.fb.group({
        name: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
      }),
      address: this.fb.group({
        city: ["", Validators.required],
        zip: ["", Validators.required],
      }),
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("Interview");
  }

  updateName() {
    this.userService.updateName(this.name);
  }

  validateAllFormFields(control: AbstractControl) {
    if (control instanceof FormGroup) {
      Object.keys(control.controls).forEach((field) => {
        const childControl = control.get(field);
        if (childControl) {
          this.validateAllFormFields(childControl);
        }
      });
    } else if (control instanceof FormArray) {
      control.controls.forEach((c) => this.validateAllFormFields(c));
    } else {
      control.markAsTouched({ onlySelf: true });
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      this.validateAllFormFields(this.form);
      return;
    }
    console.log(this.form.value);
  }
}
