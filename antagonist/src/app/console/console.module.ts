import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConsoleService} from './console.service';
import {AbstractConsoleService} from "./abstract-console.service";

@NgModule({
  declarations: [],
  providers: [ { provide: AbstractConsoleService, useClass: ConsoleService } ],
  imports: [
    CommonModule
  ]
})
export class ConsoleModule {
  constructor() {
    console.log('constructor', 'module', 'ConsoleModule');
  }
}
