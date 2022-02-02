import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filter(list: ITodo[]) {
    return {
      all: () => [...list],
      completed: () => list.filter((todo) => todo.isCompleted === true),
      active: () => list.filter((todo) => todo.isCompleted === false),
      removeById: (id: string) => list.filter((todo) => todo.id !== id),
    };
  }
  transform(list: ITodo[]) {
    return {
      changeToCompleted: (id: string) =>
        list.map((todo) => {
          return this.onChangeToCompletedHelper(todo, id);
        }),
    };
  }

  private onChangeToCompletedHelper(todo: ITodo, id: string) {
    if (todo.id === id) {
      todo.isCompleted = !todo.isCompleted;
      return todo;
    }
    return todo;
  }
}
