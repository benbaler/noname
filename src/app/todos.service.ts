import { BehaviorSubject, Observable } from 'rxjs';

export class Todo {
  name: string;
  checked: boolean;

  constructor(name: string, checked: boolean = false) {
    this.name = name;
    this.checked = checked;
  }
}

export class TodosService {
  todos: Todo[] = [];
  todosObservable = new BehaviorSubject<Todo[]>([
    new Todo('Banana'),
    new Todo('Apple'),
    new Todo('Tomato')
  ]);

  constructor() {
    this.todosObservable.subscribe(todos => {
      console.log(todos);
      this.todos = todos;
    });
  }

  getTodosObservable(): Observable<Todo[]> {
    return this.todosObservable.asObservable();
  }

  addTodo(name: string): void {
    this.todos.push(new Todo(name));
    this.todosObservable.next(this.todos);
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
    this.todosObservable.next(this.todos);
  }

  checkTodo(index: number): void {
    this.todos[index].checked = !this.todos[index].checked;
    this.todosObservable.next(this.todos);
  }
}
