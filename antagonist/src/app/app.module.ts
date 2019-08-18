import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {BodyModule} from './body/body.module';
import {WelcomeModule} from "./welcome/welcome.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SidebarModule,
    BodyModule,
    WelcomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
