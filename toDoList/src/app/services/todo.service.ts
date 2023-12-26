import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    new Todo(Guid.create(), 'Read Books', false),
    new Todo(Guid.create(), 'Buy Groceries', false),
  ];

  public getTodos(): Todo[] {
    return this.todos;
  }

  public addTodo(title: string): void {
    const newTodo = new Todo(Guid.create(), title, false);
    this.todos.push(newTodo);
  }

  public completeTodo(id: Guid): void {
    const todo = this.todos.find((x) => x.id === id);
    if (todo) {
      todo.isComplete = true;
    }
  }

  public deleteTodo(id: Guid): void {
    const index = this.todos.findIndex((x) => x.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
