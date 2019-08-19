import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-async-emitter',
  templateUrl: './async-emitter.component.html'
})
export class AsyncEmitterComponent {

  @Output()
  output: EventEmitter<void> = new EventEmitter<void>(true);

  private style: Array<string> = [
    '%cASYNC', 'background: green; border-radius: 4px; color: white; padding: 0 4px;'
  ];

  emitValue(number: number = 1): void {
    for (let i = 0; i < number; i++) {
      console.log(...this.style, 'START');
      this.output.emit();
      console.log(...this.style, 'END');
    }
  }
}
