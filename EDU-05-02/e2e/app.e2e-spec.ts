import { EDU0502Page } from './app.po';

describe('edu0502 App', () => {
  let page: EDU0502Page;

  beforeEach(() => {
    page = new EDU0502Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
