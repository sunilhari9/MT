import { SgaPage } from './app.po';

describe('sga App', () => {
  let page: SgaPage;

  beforeEach(() => {
    page = new SgaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
