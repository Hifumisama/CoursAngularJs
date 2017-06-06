import { SododoPage } from './app.po';

describe('sododo App', function() {
  let page: SododoPage;

  beforeEach(() => {
    page = new SododoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
