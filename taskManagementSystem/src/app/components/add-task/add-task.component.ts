import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  public taskTitle = '';
  public taskCompleted = false;
  public taskDueDate: Date | null = null;
  public taskCategory = '';

  categories = ['Personal', 'Work'];

  constructor(
    private taskService: TaskService,
    private router: Router,
    private authService: AuthService
  ) {}

  public addTask(): void {
    const userId = this.authService.getUserId();
    this.taskService
      .addTask({
        id: 0,
        title: this.taskTitle,
        completed: this.taskCompleted,
        category: this.taskCategory,
        dueDate: this.taskDueDate || new Date(),
        userId: userId,
      })
      .subscribe(() => {
        this.router.navigate(['/task-list']);
      });
  }
}
