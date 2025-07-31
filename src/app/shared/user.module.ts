import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { FormDemoComponent } from "../form-demo/form-demo.component";

export const routes: Routes = [
  {
    path: "",
    component: UserProfileComponent,
    title: "Users Page",
  },
  // {
  //   path: "user/:id",
  //   component: UserDetailsComponent,
  // },
  // {
  //   path: "user/:id/post",
  //   component: FormDemoComponent,
  // },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class UserModule {}
