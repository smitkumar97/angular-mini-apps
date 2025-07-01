import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TestComponent } from './test/test.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // Empty path
    title: 'Home Page',
  },
  {
    path: 'home',
    component: HomeComponent, // Empty path
    title: 'Home Page',
  },
  {
    path: 'todo',
    component: TodoComponent, // Static, most specific
    title: 'Todo App',
  },
  {
    path: 'register',
    component: RegisterComponent, // Static, most specific
    title: 'Registration Page',
  },
  {
    path: 'reset',
    component: ResetPasswordComponent, // Static, most specific
  },
  {
    path: 'calculator',
    component: CalculatorComponent, // Static, most specific
    title: 'Calculator App',
  },
  {
    path: 'test',
    component: TestComponent, // Static, most specific
    title: 'Test App',
  },
  {
    path: 'users/:id',
    component: FormDemoComponent, // Dynamic
  },
  {
    path: 'users',
    component: FormDemoComponent, // Static, less specific
  },
  {
    path: '**',
    component: NotFoundComponent, //Wildcard - always last
  },
];
