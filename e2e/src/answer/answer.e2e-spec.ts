import { AnswerPage } from './answer.po';
import { browser, logging, by, element } from 'protractor';
import { callbackify } from 'util';

describe('answer a question as an expert', () => {
  let page: AnswerPage;
  let responces: any;

  beforeEach(() => {
    page = new AnswerPage();
    page.navigateToAnswerQuestion();
  });
  it('should add a new answer', () => {
    page.selectQuestion(1);
    responces = element.all(by.css('.response-card')).count();
    expect(page.getAnswerBody().getText()).toBe('');
    page.enterTestData();
    browser.sleep(2000);
    page.selectSubmit();
    browser.sleep(5000);
    expect(page.getAnswerBody().getText()).toBe('');
  });

  it('should find an answer', () => {
    page.selectQuestion(1);
    expect(element.all(by.css('.response-card')).count()).toBeGreaterThan(responces);
  });
  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
