import {waitForVisible} from '../helpers/waiters';
import {ElementFinder} from 'protractor';

class Button {
  constructor(public root: ElementFinder) {
  }

  async click(): Promise<void> {
    await waitForVisible(this.root);
    await this.root.click();
  }

  async getData(): Promise<string> {
    await waitForVisible(this.root);
    return this.root.getText();
  }
}

export {Button};
