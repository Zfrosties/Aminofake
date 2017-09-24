import { AminofakePage } from './app.po';

describe('aminofake App', () => {
  let page: AminofakePage;

  beforeEach(() => {
    page = new AminofakePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
