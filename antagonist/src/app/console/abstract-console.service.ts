export abstract class AbstractConsoleService {
  abstract log(...args): void;
  abstract error(...args): void;
  abstract info(...args): void;
  abstract warn(...args): void;
}
