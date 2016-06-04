import { Game1Page } from './app.po';

describe('game1 App', function() {
  let page: Game1Page;

  beforeEach(() => {
    page = new Game1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('game1 works!');
  });
});
