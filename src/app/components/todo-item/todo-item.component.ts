import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input()
  todo?: Todo;

  //  CREAZIONE DELL'ALLARME
  @Output()
  onRichiestaCompletamento = new EventEmitter<number>();

  //  ATTIVAZIONE DELL'ALLARME
  richiediCompletamento() {
    this.onRichiestaCompletamento.emit(this.todo!.id);
  }
}
