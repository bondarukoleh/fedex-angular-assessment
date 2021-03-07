import {FormGroup} from '@angular/forms';

enum InputNames {
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  password = 'password',
}

const inputValues = {
  [InputNames.firstName]: 'First Name',
  [InputNames.lastName]: 'Last Name',
  [InputNames.email]: 'email@gmail.com',
  [InputNames.password]: 'Password',
};

const inputsTestData = [
  {fieldName: InputNames.firstName, validValue: inputValues[InputNames.firstName], invalidValue: 111},
  {fieldName: InputNames.lastName, validValue: [InputNames.lastName], invalidValue: 111},
  {fieldName: InputNames.email, validValue: [InputNames.email], invalidValue: 'invalid_email'},
  {fieldName: InputNames.password, validValue: [InputNames.password], invalidValue: 'password'},
];

const passwordTestData = [
  {invalidValue: 'Passwor', errorMessage: 'is shorter than 8 characters'},
  {invalidValue: 'PASSWORD', errorMessage: 'without lowercase characters'},
  {invalidValue: 'password', errorMessage: 'without uppercase characters'},
  {invalidValue: `password${inputValues[InputNames.firstName]}`, errorMessage: 'contain first name value'},
  {invalidValue: `password${inputValues[InputNames.lastName]}`, errorMessage: 'contain last name value'},
];

const fillSignUpForm = (
  formToFill: FormGroup,
  {fields, opts}: {fields?: {firstName?: string, lastName?: string, email?: string, password?: string},
  opts?: {mergeWithDefault: boolean, withoutFieldName?: string}}): void => {
  fields = opts.mergeWithDefault ? {...inputValues, ...fields} : fields;
  if (opts?.withoutFieldName) {
    /* Because of the "mergeWithDefault" we cannot pass empty string as a field value, it will be rewrite with default value */
    fields[opts.withoutFieldName] = '';
  }
  Object.entries(fields).forEach(([inputName, value]) => formToFill.controls[inputName].setValue(value));
};

export {InputNames, inputValues, inputsTestData, fillSignUpForm, passwordTestData};
