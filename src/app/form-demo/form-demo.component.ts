import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-form-demo",
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: "./form-demo.component.html",
  styleUrl: "./form-demo.component.scss",
})
export class FormDemoComponent implements OnInit {
  form!: FormGroup;
  submissions: any[] = [];
  private nextId = 1;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  // Closure function that creates a submission handler
  createSubmissionHandler() {
    const component = this;
    const currentId = this.nextId++;

    return (formData: any) => {
      const submission = {
        id: currentId,
        ...formData,
        timestamp: new Date(),
      };
      component.submissions.unshift(submission);
      console.log("New submission:", submission);
    };
  }

  onSubmit(): void {
    if (this.form.valid) {
      const handler = this.createSubmissionHandler();
      handler(this.form.value);
      this.form.reset();
    }
  }

  // Array function with closure
  filterSubmissions(minLength: number): any[] {
    return this.submissions.filter((sub) => {
      // Closure captures minLength
      return sub.username.length >= minLength;
    });
  }

  // Another example with array map and closure
  getSubmissionSummaries(prefix: string): string[] {
    return this.submissions.map((sub) => {
      // Closure captures prefix
      return `${prefix} ${sub.id}: ${sub.username}`;
    });
  }
}
