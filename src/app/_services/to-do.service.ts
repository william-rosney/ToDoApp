import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../_models/todo';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  todos: Todo[] = [
    new Todo("Faire la vaisselle"),
    new Todo("Go to gym"),
    new Todo("Faire Todo"),
    new Todo("Hello World"),
  ]
  constructor() {}

  getToDos(): Observable<Todo[]> {
    return of(this.todos);
  }

  add(todo: Todo) {
    this.todos.push(todo);
    console.log(this.todos);
  }

  update(){

  }

  delete(){
    
  }

}