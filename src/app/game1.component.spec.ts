import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Game1AppComponent } from '../app/game1.component';

beforeEachProviders(() => [Game1AppComponent]);

describe('App: Game1', () => {
  it('should create the app',
      inject([Game1AppComponent], (app: Game1AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'game1 works!\'',
      inject([Game1AppComponent], (app: Game1AppComponent) => {
    expect(app.title).toEqual('game1 works!');
  }));
});
