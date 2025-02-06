import { Component, OnInit, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService)
  todoItems = signal<Array<Todo>>([])

  ngOnInit(): void {
    this.todoService.getTodosFromApi()
      .pipe(
        catchError((error) => {
          console.error('Error fetching todos', error);
          throw error;
        })
      )
      .subscribe((todos: Todo[]) => {
        this.todoItems.set(todos);
      });

  }
}
