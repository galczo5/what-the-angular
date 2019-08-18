import {AppModule} from "./app.module";
import {AbstractConsoleService} from "./console/abstract-console.service";

class ConsoleServiceMock extends AbstractConsoleService {

  private output: Array<any> = [];

  info(...args): void {
    this.output = [...this.output, ...args];
  }

  getOutput(): Array<any> {
    return this.output;
  }

  error(...args): void {}
  log(...args): void {}
  warn(...args): void {}
}

describe('app.module', () => {
  it('show hire invitation at start', () => {
    // given
    const mockedConsole = new ConsoleServiceMock();

    // when
    new AppModule(mockedConsole);

    // then
    const output = mockedConsole.getOutput();
    expect(output.length).toEqual(1);
    expect(output[0]).toEqual(`HI! Aren't you awesome web developer?` +
      `We have job for you! Check it out and apply for it at hire_me@awesome.xyz`);
  });
});
