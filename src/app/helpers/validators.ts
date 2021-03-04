import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const passwordValidation: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const passwordControl = control.get('password');
    const firstName = control.get('firstName').value;
    const lastName = control.get('lastName').value;
    const containsLowerUpperLetters = /(?=.*[a-z])(?=.*[A-Z])/;
    const containNames = new RegExp(`(.*?${firstName}.*?)|(.*?${lastName}.*?)`, 'i');

    if (passwordControl.value.length && passwordControl.value.length < 7){
      passwordControl.setErrors({customError: 'should be at least 8 characters long'});
      return;
    }
    if (!containsLowerUpperLetters.test(passwordControl.value)) {
      passwordControl.setErrors({customError: 'should contain lower and uppercase letters'});
      return;
    }
    if (containNames.test(passwordControl.value)) {
      passwordControl.setErrors({customError: 'should not contain user’s first or last name'});
      return;
    }
    return null;
};
