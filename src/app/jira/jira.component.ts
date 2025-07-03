import { Component } from "@angular/core";
import { UserService } from "../services/user.service";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { InnerCardComponent } from "../inner-card/inner-card.component";
import { CommonModule } from "@angular/common";
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

interface todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

@Component({
  selector: "app-jira",
  imports: [
    ButtonModule,
    CardModule,
    InnerCardComponent,
    CommonModule,
    DragDropModule,
  ],
  templateUrl: "./jira.component.html",
  styleUrl: "./jira.component.scss",
})
export class JiraComponent {
  todoList$: todo[] = [];
  inprogress$: todo[] = [];

  constructor(private myService: UserService) {}

  ngOnInit(): void {
    this.myService
      .getTaskDetail()
      .pipe()
      .subscribe({
        next: (response) => {
          if (response.todos.length > 0) {
            this.todoList$ = response.todos;
          }
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  dragoverHandler(ev: any) {
    ev.preventDefault();
  }

  dropHandler(ev: any) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  dragstartHandler(ev: any) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
