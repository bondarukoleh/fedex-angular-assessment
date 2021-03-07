import {pages} from '../pages';

describe('Sign Up', () => {
  const {signupPage} = pages;

  const userData = {firstName: 'John', lastName: 'Doe', email: 'email@gmail.com', password: 'Password'};

  it('should signup', async () => {
    await signupPage.navigateTo();
    await signupPage.signUpUser(userData);
    const emptyForm = await signupPage.getSignUpFormData();
    for (const [field, {errorMessage}] of Object.entries(emptyForm)) {
      expect(errorMessage).toEqual('', `Field ${field} shouldn't contain error ${errorMessage}`);
    }
  });

  it('should show error messages', async () => {
    await signupPage.navigateTo();
    await signupPage.clickSignUpButton();
    const emptyForm = await signupPage.getSignUpFormData();
    for (const [field, {errorMessage}] of Object.entries(emptyForm)) {
      expect(errorMessage).toContain('is required', `Field ${field} should contain "required" in error message`);
    }
  });
});
