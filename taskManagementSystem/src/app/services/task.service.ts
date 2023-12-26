// src/app/task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient,private authService:AuthService) {}

  getTasks(userId: string): Observable<Task[]> {
    const url = `${this.apiUrl}?userId=${userId}`;
    return this.http.get<Task[]>(url);
  }

  addTask(task: Task): Observable<Task> {
    task.userId = this.authService.getUserId();
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  deleteTask(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  getTasksByCategory(category: string): Observable<Task[]> {
    const url = `${this.apiUrl}?category=${category}`;
    return this.http.get<Task[]>(url);
  }

  getTaskById(id: number): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Task>(url);
  }
}


