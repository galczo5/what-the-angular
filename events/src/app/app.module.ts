import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SyncEmitterComponent} from './sync-emitter/sync-emitter.component';
import {AsyncEmitterComponent} from './async-emitter/async-emitter.component';

@NgModule({
  declarations: [
    AppComponent,
    SyncEmitterComponent,
    AsyncEmitterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
