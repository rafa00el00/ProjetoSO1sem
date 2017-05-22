import { ProjetoSORobinRoundPage } from './app.po';

describe('projeto-sorobin-round App', () => {
  let page: ProjetoSORobinRoundPage;

  beforeEach(() => {
    page = new ProjetoSORobinRoundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
