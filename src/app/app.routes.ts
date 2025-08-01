import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FormDemoComponent } from "./form-demo/form-demo.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { TestComponent } from "./test/test.component";
import { TodoComponent } from "./todo/todo.component";
import { EcommerceComponent } from "./ecommerce/ecommerce.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserDetailsComponent } from "./shared/user-details/user-details.component";
import { LoginComponent } from "./login/login.component";
import { JiraComponent } from "./jira/jira.component";
import { DebounceSearchComponent } from "./debounce-search/debounce-search.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home Page",
  },
  {
    path: "jira",
    component: JiraComponent,
    title: "Jira Page",
  },
  {
    path: "todo",
    component: TodoComponent,
    title: "Todo App",
  },
  {
    path: "ecommerce",
    component: EcommerceComponent,
    title: "Todo App",
  },
  {
    path: "calculator",
    component: CalculatorComponent,
    title: "Calculator App",
  },
  {
    path: "users",
    loadChildren: () =>
      import("./shared/user.module").then((m) => m.UserModule),
    // component: UserProfileComponent,
  },
  {
    path: "user/:id",
    component: UserDetailsComponent,
  },
  {
    path: "user/:id/post",
    component: FormDemoComponent,
  },
  {
    path: "debounce",
    component: DebounceSearchComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "test",
    component: TestComponent,
    title: "Test App",
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
