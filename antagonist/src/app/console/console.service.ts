import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';
import {AbstractConsoleService} from "./abstract-console.service";

export const CONSOLE_PREFIX = new InjectionToken('console prefix');

@Injectable()
export class ConsoleService extends AbstractConsoleService {

  constructor(@Optional() @Inject(CONSOLE_PREFIX) private readonly prefix: string) {
    super();
    this.prefix = prefix || '';
  }

  log(...args): void {
    console.log(this.prefix, ...args);
  }

  error(...args): void {
    console.error(this.prefix, ...args);
  }

  info(...args): void {
    // tslint:disable-next-line:no-console
    console.info(this.prefix, ...args);
  }

  warn(...args): void {
    console.warn(this.prefix, ...args);
  }

}
