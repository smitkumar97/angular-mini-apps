import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

interface TodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
  checked: boolean;
}

@Component({
  selector: 'app-todo',
  imports: [TableModule, ButtonModule, ToastModule, FormsModule, CommonModule],
  providers: [MessageService],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoList: TodoItem[] = [
    {
      id: 1,
      name: 'Design a Todo App',
      isCompleted: false,
      checked: false,
    },
    {
      id: 2,
      name: 'Build a Weather App',
      isCompleted: false,
      checked: false,
    },
  ];

  selectedTodo!: any;
  todoItemName!: string;

  constructor(private messageService: MessageService) {}

  addTodoItem() {
    if (!this.todoItemName) {
      this.show({
        severity: 'warn',
        summary: 'Alert!',
        detail: 'Please enter a the todo name',
        life: 3000,
      });
      return;
    }
    const id = this.todoList.length;
    const todoItm: TodoItem = {
      id: id,
      name: this.todoItemName,
      isCompleted: false,
      checked: false,
    };

    this.todoList.push(todoItm);
    this.todoItemName = '';
    this.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Todo added successfully.',
      life: 3000,
    });
  }

  deleteTodoItem(todoId: number) {
    this.todoList = this.todoList.filter((todo) => todo.id !== todoId);
  }

  deleteAllTodos() {
    if (this.selectedTodo.length === this.todoList.length) {
      this.todoList.length = 0;
      this.show({
        severity: 'success',
        summary: 'Success',
        detail: 'Todos deleted successfully.',
        life: 3000,
      });
    } else {
      this.show({
        severity: 'warn',
        summary: 'Alert!',
        detail: 'Please select all todos.',
        life: 3000,
      });
    }
  }

  show(message: any) {
    this.messageService.add(message);
  }
}
