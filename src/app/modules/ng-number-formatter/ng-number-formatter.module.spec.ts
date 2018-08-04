import { NgNumberFormatterModule } from './ng-number-formatter.module';

describe('NgNumberFormatterModule', () => {
  let ngNumberFormatterModule: NgNumberFormatterModule;

  beforeEach(() => {
    ngNumberFormatterModule = new NgNumberFormatterModule();
  });

  it('should create an instance', () => {
    expect(ngNumberFormatterModule).toBeTruthy();
  });
});
