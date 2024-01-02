import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css'],
})
export class TaskFilterComponent implements OnInit {
  public tasks: Task[] = [];
  public filteredTasks: Task[] = [];
  public selectedCategory = '';
  public categories: string[] = ['All', 'Work', 'Personal'];
  public selectedDueDate: Date | undefined;

  constructor(private taskService: TaskService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  public loadTasks(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.taskService.getTasks(userId).subscribe((tasks) => {
        this.tasks = tasks;
        this.applyFilters();
      });
    } else {
      console.log('User ID not available. Please log in.');
    }
  }

  public filterTasks(): void {
    this.applyFilters();
  }

  public sortTasksByDueDate(): void {
    this.filteredTasks.sort((a, b) => {
      if (a.dueDate && b.dueDate) {
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      } else {
        return 0;
      }
    });
  }
  private applyFilters(): void {
    this.filteredTasks = this.tasks
      .filter((task) => this.filterByCategory(task))
      .filter((task) => this.filterByDueDate(task));
  }

  private filterByCategory(task: Task): boolean {
    return this.selectedCategory === 'All' || task.category === this.selectedCategory;
  }

  private filterByDueDate(task: Task): boolean {
    if (!this.selectedDueDate) {
      return true;
    }
    const taskDueDate = new Date(task.dueDate);
    const selectedDueDate = new Date(this.selectedDueDate);
    
    return (
      taskDueDate.getFullYear() === selectedDueDate.getFullYear() &&
      taskDueDate.getMonth() === selectedDueDate.getMonth() &&
      taskDueDate.getDate() === selectedDueDate.getDate()
    );
  }
}


