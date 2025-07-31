import { Component } from "@angular/core";
import { UserService } from "../services/user.service";
import { Subject, Subscription, takeUntil } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TableModule } from "primeng/table";
import { Button } from "primeng/button";
import { Dialog } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { DialogComponent } from "../shared/dialog/dialog.component";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-user-profile",
  imports: [TableModule, Button, ButtonModule, DialogComponent, CommonModule],
  templateUrl: "./user-profile.component.html",
  styleUrl: "./user-profile.component.scss",
  providers: [HttpClient],
})
export class UserProfileComponent {
  userList$: any = [];
  selectedUser!: any;
  visible = false;
  showList = false;
  destroyed$ = new Subject<void>();
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getListOfUsers();
  }

  getListOfUsers() {
    this.userService.getUsers().subscribe({
      next: (response) => {
        if (response?.users?.length > 0) {
          this.userList$ = response?.users;
          console.log(this.userList$);
        }
      },
      error: (error) => {
        console.error("Error fetching users:", error);
      },
    });
  }

  openUserProfile(id: number) {
    // this.visible = !this.visible;
    const userDetails = this.userList$.find((user: any) => user.id === id);
    this.router.navigate([`/user/${id}`], {
      state: { user: userDetails },
    });
  }

  closeDialog() {
    this.visible = false;
  }

  dropDownChange(event: Event) {
    const selectedOp = (event.target as HTMLSelectElement)?.value;
    console.log(selectedOp);

    const result = [...this.userList$];
    if (selectedOp === "title") {
      // Sort by title (A-Z) using comparison operators
      this.userList$ = result.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );
    } else if (selectedOp === "id") {
      // Sort by id ascending
      this.userList$ = result.sort((a, b) => a.id - b.id);
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
