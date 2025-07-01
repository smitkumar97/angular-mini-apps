import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { MenuItem } from "primeng/api";
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";
import { InputTextModule } from "primeng/inputtext";
import { Menubar } from "primeng/menubar";
import { StyleClassModule } from "primeng/styleclass";

@Component({
  selector: "app-navbar",
  imports: [
    Menubar,
    AvatarModule,
    InputTextModule,
    CommonModule,
    RouterModule,
    BadgeModule,
    StyleClassModule,
  ],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: "Home",
        icon: "pi pi-home",
        route: "/home",
      },
      // {
      //   label: 'Contact',
      //   icon: 'pi pi-phone',
      //   route: '/contact',
      // },
      {
        label: "Projects",
        icon: "pi pi-home",
        badge: "3",
        items: [
          {
            label: "Todo App",
            url: "/todo",
          },
        ],
      },
    ];
  }
}
