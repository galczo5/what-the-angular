import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sync-emitter',
  templateUrl: './sync-emitter.component.html'
})
export class SyncEmitterComponent {

  @Output()
  output: EventEmitter<void> = new EventEmitter<void>(false);

  private style: Array<string> = [
    '%cSYNC', 'background: red; border-radius: 4px; color: white; padding: 0 4px;'
  ];

  emitValue(number: number = 1): void {
    for (let i = 0; i < number; i++) {
      console.log(...this.style, 'START');
      this.output.emit();
      console.log(...this.style, 'END');
    }
  }
}
