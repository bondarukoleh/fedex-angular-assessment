import {waitForVisible} from '../helpers/waiters';
import {browser, ElementFinder} from 'protractor';

class Input {
  constructor(public root: ElementFinder) {
  }

  async click(): Promise<void> {
    await waitForVisible(this.root);
    await this.root.$('input').click();
  }

  async sendKeys(data: string | number): Promise<void> {
    await waitForVisible(this.root);
    await this.root.$('input').clear();
    return this.root.$('input').sendKeys(data);
  }

  async getData(): Promise<{value: string, errorMessage: string}> {
    await waitForVisible(this.root);
    return browser.executeScript((rootElement) => {
      // getting information about input and it's label in one place
      return {
        value: rootElement.querySelector('input').value,
        errorMessage: rootElement.querySelector('.invalid-feedback') ? rootElement.querySelector('.invalid-feedback').innerText : '',
      };
    }, this.root.getWebElement());
  }
}

export {Input};
