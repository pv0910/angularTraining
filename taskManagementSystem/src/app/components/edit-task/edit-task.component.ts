import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  taskId: number | undefined;
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = +params['id']; 
      if (this.taskId) {
        this.taskService.getTaskById(this.taskId).subscribe((task) => (this.task = task));
      }
    });
  }

  updateTask(): void {
    if (this.task) {
      this.taskService.updateTask(this.task).subscribe(() => {
        this.router.navigate(['/task-list']); 
      });
    }
  }
}


