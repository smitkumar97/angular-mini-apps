import { Component } from "@angular/core";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

interface Ticket {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  type?: string;
  points?: number;
}

@Component({
  selector: "app-jira",
  imports: [ButtonModule, CardModule, CommonModule, DragDropModule],
  templateUrl: "./jira.component.html",
  styleUrl: "./jira.component.scss",
})
export class JiraComponent {
  todo: Ticket[] = [
    {
      id: "PROJ-123",
      title: "Implement user authentication",
      description: "Create login and registration pages",
      type: "Story",
      status: "todo",
      points: 5,
    },
    {
      id: "PROJ-124",
      title: "Implement user profile",
      description: "Create user profile pages",
      type: "Story",
      status: "in-progress",
      points: 5,
    },
    {
      id: "PROJ-123",
      title: "Implement table",
      description: "Create table",
      type: "Story",
      status: "todo",
      points: 5,
    },
    {
      id: "PROJ-155",
      title: "Implement dashboard",
      description: "Create charts",
      type: "Task",
      status: "in-progress",
      points: 5,
    },
  ];

  inProgress: Ticket[] = [];
  inQA: Ticket[] = [];
  done: Ticket[] = [];

  drop(event: CdkDragDrop<Ticket[]>) {
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
