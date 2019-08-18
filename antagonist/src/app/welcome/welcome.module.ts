import {NgModule} from '@angular/core';

@NgModule({
  declarations: [],
  // providers: [
  //   {
  //     multi: true,
  //     provide: APP_INITIALIZER,
  //     useFactory: (consoleService: AbstractConsoleService) => {
  //       return () => {
  //         consoleService.info(`HI! Aren't you awesome web developer?` +
  //           `We have job for you! Check it out and apply for it at hire_me@awesome.xyz`);
  //       };
  //     },
  //     deps: [AbstractConsoleService]
  //   }
  // ],
  // imports: [
  //   ConsoleModule
  // ]
})
export class WelcomeModule {
  constructor() {
    console.log('constructor', 'module', 'WelcomeModule');
  }
}
