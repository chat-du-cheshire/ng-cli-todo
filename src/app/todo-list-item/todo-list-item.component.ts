import {Component, Input, OnInit, Output, EventEmitter, HostBinding} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;

  @HostBinding('class.completed') complete = false;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.complete = this.todo.complete;
  }

  toggleTodoComplete(todo: Todo) {
    this.complete = !todo.complete;
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
