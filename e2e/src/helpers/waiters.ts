import {ExpectedConditions, ElementFinder, browser} from 'protractor';

async function waitForVisible(element: ElementFinder, timeToWait: number = 3000): Promise<unknown> {
  return browser.wait(ExpectedConditions.visibilityOf(element), timeToWait,
    `Element ${element.locator()} should be visible.`);
}

export {waitForVisible};
