export class Game1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('game1-app h1')).getText();
  }
}
