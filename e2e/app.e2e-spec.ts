import { IlluminatiPage } from './app.po';

describe('illuminati App', () => {
  let page: IlluminatiPage;

  beforeEach(() => {
    page = new IlluminatiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
