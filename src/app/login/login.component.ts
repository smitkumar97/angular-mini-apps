import { Component, inject } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { MessageModule } from "primeng/message";
import { MessageService } from "primeng/api";
import { FocusTrapModule } from "primeng/focustrap";
import { CheckboxModule } from "primeng/checkbox";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { AutoFocusModule } from "primeng/autofocus";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ToastModule } from "primeng/toast";

@Component({
  selector: "app-login",
  imports: [
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    MessageModule,
    ToastModule,
    FocusTrapModule,
    InputTextModule,
    CheckboxModule,
    IconFieldModule,
    InputIconModule,
    AutoFocusModule,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
  providers: [MessageService],
})
export class LoginComponent {
  messageService = inject(MessageService);
  email!: string;
  formSubmitted = false;
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.createLoginForm();
  }

  createLoginForm() {
    return this.fb.group({
      email: ["", Validators.required, Validators.email],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    if (!this.loginForm.invalid) {
      this.messageService.add({
        severity: "success",
        summary: "Success",
        detail: "Form Submitted",
        life: 3000,
      });
      this.loginForm.reset();
    }
  }

  isInvalid(controlName: string) {
    const control = this.loginForm.get(controlName);
    return control?.invalid && (control.touched || this.formSubmitted);
  }
}
