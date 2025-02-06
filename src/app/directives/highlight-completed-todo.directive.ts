import { Directive, input, effect } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodoDirective {
  isCompleted = input<boolean>(false);
  constructor() { }

  stylesEffect = effect(() => {
    return {
      'text-decoration': this.isCompleted() ? 'line-through' : 'none',
      'color': this.isCompleted() ? 'red' : 'black'
    };
  });
}
