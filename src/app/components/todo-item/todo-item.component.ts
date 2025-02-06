import { Component, input } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { Todo } from '../../model/todo.type';

import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [MatListModule, HighlightCompletedTodoDirective],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  todo = input.required<Todo>();
}
