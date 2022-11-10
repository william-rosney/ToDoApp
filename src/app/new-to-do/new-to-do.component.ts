import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../_models/todo';
import { ToDoService } from '../_services/to-do.service';

@Component({
  selector: 'app-new-to-do',
  templateUrl: './new-to-do.component.html',
  styleUrls: ['./new-to-do.component.css']
})
export class NewToDoComponent implements OnInit {

  newTodo:string ="";
  constructor(public todoService: ToDoService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.todoService.add(new Todo(this.newTodo))
  }

}
