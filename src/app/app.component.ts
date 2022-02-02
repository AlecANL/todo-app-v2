import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITodo } from './models/todo.interface';
import { FilterService } from './services/filter.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoForm: FormGroup = this.fb.group({
    todo: ['', [Validators.required, Validators.minLength(3)]],
  });
  private _todList: ITodo[] = [];
  private _keyTodoStorage: string = 'todo-app_v2';
  private _typeFilter: 'all' | 'active' | 'completed' = 'all';

  constructor(
    private fb: FormBuilder,
    private filterService: FilterService,
    private themeService: ThemeService
  ) {
    this.getTodoListToStorage();
  }

  /**
   * Return list of todos
   */

  get todoList() {
    const x = this.filterService.filter(this._todList);
    const filteredBy = x[this._typeFilter]();
    return [...filteredBy];
  }

  get currentTheme() {
    return this.themeService.currentTheme;
  }

  onChangeTheme() {
    const theme =
      this.currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    this.themeService.setCurrentTheme = theme;
  }

  onSubmit() {
    if (!this.todoForm.valid) {
      return;
    }
    this.onAddTodo();
    this.todoForm.reset();
  }

  /* ========= TODO Actions ============= */

  onAddTodo() {
    const todoName = this.todoForm.get('todo')?.value;
    const todo: ITodo = {
      isCompleted: false,
      id: `${Date.now()}`,
      name: todoName,
    };
    this._todList = [...this._todList, { ...todo }];
    this.onSaveToStorage(this._todList);
  }

  onRemoveTodo(id: string) {
    const list = this.filterService.filter(this._todList).removeById(id);
    this._todList = list;
    this.onSaveToStorage(this._todList);
  }

  onChangeCompleted(id: string) {
    const list = this.filterService
      .transform(this._todList)
      .changeToCompleted(id);
    this._todList = list;
    this.onSaveToStorage(this._todList);
  }

  onClearTodoItemsCompleted() {
    const list = this.filterService.filter(this._todList).active();
    this._todList = list;
    this.onSaveToStorage(this._todList);
  }
  /* ========= TODO Actions ============= */

  getTodoListToStorage() {
    const todoList = this.onGetToStorage();
    if (!todoList) {
      this._todList = [];
      return;
    }
    this._todList = [...todoList];
  }

  getActiveTabClass(tab: 'all' | 'completed' | 'active') {
    return this._typeFilter === tab ? 'is-active' : '';
  }
  /* =============== Filters ============ */
  /**
   *
   * @param typeFilter
   * change items in the list of todos
   */
  handleFilter(typeFilter: 'all' | 'completed' | 'active') {
    this._typeFilter = typeFilter;
  }

  /* =============== Filters ============ */

  /* =============== LocalStorage Helper ============ */

  onSaveToStorage(value: ITodo[]) {
    localStorage.setItem(this._keyTodoStorage, JSON.stringify(value));
  }
  onGetToStorage(): ITodo[] | null {
    return (
      JSON.parse(localStorage.getItem(this._keyTodoStorage) as string) || null
    );
  }
  /* =============== LocalStorage Helper ============ */
}
