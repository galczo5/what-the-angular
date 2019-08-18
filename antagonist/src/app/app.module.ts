import {BrowserModule} from '@angular/platform-browser';
import {APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderModule} from './header/header.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {BodyModule} from './body/body.module';
import {WelcomeModule} from "./welcome/welcome.module";
import {ConsoleModule} from "./console/console.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SidebarModule,
    BodyModule,
    ConsoleModule,
    WelcomeModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      multi: true,
      provide: APP_INITIALIZER,
      useValue: () => {
        console.log('APP_INITIALIZER');
      }
    },
    {
      multi: true,
      provide: APP_BOOTSTRAP_LISTENER,
      useValue: () => {
        console.log('APP_BOOTSTRAP_LISTENER');
      }
    }
  ]
})
export class AppModule {
  constructor() {
    console.log('constructor', 'module', 'AppModule');
  }
}
