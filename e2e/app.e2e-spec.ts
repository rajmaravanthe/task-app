import { TaskAppPage } from './app.po';

describe('task-app App', () => {
  let page: TaskAppPage;

  beforeEach(() => {
    page = new TaskAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
