import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.taskService.getTasks(userId).subscribe((tasks) => {
        this.tasks = tasks;
      });
    } else {
      console.log('User ID not available. Please log in.');
    }
  }

  deleteTask(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task && task.userId === this.authService.getUserId()) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.loadTasks();
      });
    } else {
      console.log('Unauthorized deletion');
    }
  }
}
