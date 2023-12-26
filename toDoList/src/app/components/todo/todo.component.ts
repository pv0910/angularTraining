import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(private todoService: TodoService) {}

  public get todos() {
    return this.todoService.getTodos();
  }

  public onSubmit(form: NgForm): void {
    const title = form.value.title;

    if (this.isValidTitle(title)) {
      this.todoService.addTodo(title);
      form.resetForm();
    } else {
      console.error('Invalid title. Please enter a non-empty string without numbers.');
    }
  }
  private isValidTitle(title: string): boolean {
    return !!title && /^[a-zA-Z]+$/.test(title);  }

  public onComplete(id: Guid): void {
    this.todoService.completeTodo(id);
  }

  public onDelete(id: Guid): void {
    this.todoService.deleteTodo(id);
  }
}

