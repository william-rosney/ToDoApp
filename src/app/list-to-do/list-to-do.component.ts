import { Component, OnInit } from '@angular/core';
import { Todo } from '../_models/todo';
import { ToDoService } from '../_services/to-do.service';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todoService.getToDos().subscribe({
      next: todoList => this.todos = todoList,
      error: error => console.log(error),
    })
  }

}
