import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderModule} from './header/header.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {BodyModule} from './body/body.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SidebarModule,
    BodyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
