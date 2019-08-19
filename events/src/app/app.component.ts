import {ChangeDetectionStrategy, Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck {

  count: number = 0;

  private skipNextDoCheckLog: boolean = true;

  private handlerStyles: Array<string> = [
    '%cOUTPUT', 'background: gray; border-radius: 4px; color: white; padding: 0 4px;'
  ];

  private changeDetectionStyles: Array<string> = [
    '%cCHANGE DETECTION', 'background: black; border-radius: 4px; color: white; padding: 0 4px;'
  ];

  outputHandler(): void {
    console.log(...this.handlerStyles, 'OUTPUT HANDLED');
  }

  clear(): void {
    this.count = -1;
  }

  clearConsole(): void {
    this.skipNextDoCheckLog = true;
    console.clear();
  }

  ngDoCheck(): void {
    if (this.skipNextDoCheckLog) {
      this.skipNextDoCheckLog = false;
      return;
    }

    this.count = this.count + 1;
    console.log(...this.changeDetectionStyles, 'Call of ngDoCheck');
  }

}
