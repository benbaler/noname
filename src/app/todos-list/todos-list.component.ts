import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  todos: Observable<Todo[]>;

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todos = this.todosService.getTodosObservable();
  }

  onCheck(index: number): void {
    this.todosService.checkTodo(index);
  }

  onDelete(index: number): void {
    this.todosService.deleteTodo(index);
  }

  onAdd(name: string): void {
    this.todosService.addTodo(name);
  }

}
