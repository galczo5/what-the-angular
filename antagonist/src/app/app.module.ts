import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {BodyModule} from './body/body.module';
import {ConsoleModule} from './console/console.module';
import {AbstractConsoleService} from "./console/abstract-console.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SidebarModule,
    ConsoleModule,
    BodyModule
  ],
  providers: [
   // { provide: CONSOLE_PREFIX, useValue: 'AWESOME_DEVELOPER' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(consoleService: AbstractConsoleService) {
    consoleService.info(`HI! Aren't you awesome web developer?` +
                              `We have job for you! Check it out and apply for it at hire_me@awesome.xyz`);
  }
}
