import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './todo';
import {environment} from '../environments/environment';

import {catchError, map, mapTo} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

const API_URL = environment.apiUrl;

function newTodo(todo): Todo {
  return new Todo(todo);
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  // API: GET /todos
  public getAllTodos(): Observable<Todo[]> {
    return this.http.get(`${API_URL}/todos`)
      .pipe(
        map((todos: any[]) => todos.map(newTodo)),
        catchError(this.handleError)
      );
  }

  // API: POST /todos
  public createTodo(todo: Todo): Observable<Todo> {
    // will use this.http.post()
    return this.http.post(`${API_URL}/todos`, todo).pipe(
      map(newTodo),
      catchError(this.handleError));
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number): Observable<Todo> {
    // will use this.http.get()
    return this.http.get(`${API_URL}/todos/${todoId}`).pipe(
      map(newTodo),
      catchError(this.handleError));
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo): Observable<Todo> {
    // will use this.http.put()
    return this.http.put(`${API_URL}/todos/${todo.id}`, todo).pipe(
      map(newTodo),
      catchError(this.handleError));
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number): Observable<null> {
    // will use this.http.delete()
    return this.http.delete(`${API_URL}/todos/${todoId}`).pipe(
      mapTo(null),
      catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }
}
