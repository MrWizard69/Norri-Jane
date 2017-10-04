import { NorriJaneSitePage } from './app.po';

describe('norri-jane-site App', () => {
  let page: NorriJaneSitePage;

  beforeEach(() => {
    page = new NorriJaneSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
