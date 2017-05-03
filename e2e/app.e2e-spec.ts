import { CvWebAngularPage } from './app.po';

describe('cv-web-angular App', () => {
  let page: CvWebAngularPage;

  beforeEach(() => {
    page = new CvWebAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
