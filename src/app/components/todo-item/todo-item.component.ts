import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../../models/todo.interface';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem!: ITodo;
  @Output() idTodo: EventEmitter<string> = new EventEmitter();
  @Output() onDeleteTodo: EventEmitter<string> = new EventEmitter();
  @Output() onChangeCompleted: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  deleteTodo(id: string) {
    this.onDeleteTodo.emit(id);
  }

  changeCompleted(id: string) {
    this.onChangeCompleted.emit(id);
  }
}
