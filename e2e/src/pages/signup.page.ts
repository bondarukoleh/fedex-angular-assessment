import {Button, Input} from '../elements';
import {$, browser} from 'protractor';

type SignUpUser = {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
};

type SignUpFormData = {
  firstName?: {value: string, errorMessage: string}
  lastName?: {value: string, errorMessage: string}
  email?: {value: string, errorMessage: string}
  password?: {value: string, errorMessage: string}
};

class SignupPage {
  private firstName: Input;
  private lastName: Input;
  private email: Input;
  private password: Input;
  private signUpButton: Button;

  constructor() {
    this.firstName = new Input($('#firstName'));
    this.lastName = new Input($('#lastName'));
    this.email = new Input($('#email'));
    this.password = new Input($('#password'));
    this.signUpButton = new Button($(`button[type='submit']`));
  }

  async navigateTo(): Promise<void> {
    return browser.get(browser.baseUrl);
  }

  async clickSignUpButton(): Promise<void> {
    return this.signUpButton.click();
  }

  // destructuring assignment - to have ability to send not all fields data to method
  async signUpUser({firstName = '', lastName = '', email = '', password = ''}: SignUpUser = {}): Promise<void> {
    await this.firstName.sendKeys(firstName);
    await this.lastName.sendKeys(lastName);
    await this.email.sendKeys(email);
    await this.password.sendKeys(password);
    return this.clickSignUpButton();
  }

  async getSignUpFormData(): Promise<SignUpFormData> {
    return {
      firstName: await this.firstName.getData(),
      lastName: await this.lastName.getData(),
      email: await this.email.getData(),
      password: await this.password.getData()
    };
  }
}

export {SignupPage, SignUpUser};
