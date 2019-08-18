export abstract class AbstractConsoleService {

  constructor() {
    console.log('constructor', 'service', 'ConsoleService');
  }

  abstract log(...args): void;
  abstract error(...args): void;
  abstract info(...args): void;
  abstract warn(...args): void;
}
