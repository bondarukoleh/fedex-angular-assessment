import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';

import {SignupComponent} from './signup.component';
import {InputComponent} from './input/input.component';
import {UserApi} from '../../api/userApi';
import {Request} from '../../helpers/request';
import {configureTestSuite} from 'ng-bullet';
import {fillSignUpForm, inputsTestData, passwordTestData, InputNames} from './specHelper';


describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let form: FormGroup;
  let userApi: UserApi;
  let httpTestingController: HttpTestingController;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent, InputComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      providers: [UserApi, Request],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    form = component.form;
    fixture.detectChanges();
    userApi = TestBed.inject(UserApi);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should render elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElements: HTMLElement[] = inputsTestData
      .map(({fieldName}) => compiled.querySelector(`input[name=${fieldName}]`));
    const signUpButton: HTMLElement = compiled.querySelector(`button[name='signUp']`);

    inputElements.forEach((element, i) => {
      expect(element).toBeTruthy(`"${inputsTestData[i].fieldName}" is not rendered`);
    });
    expect(signUpButton).toBeTruthy(`signUpButton not rendered`);
  });

  describe(`Input validation`, () => {
    const getFormField = (fieldName: string): FormControl => form.controls[fieldName] as FormControl;

    it(`form should be valid if all input values valid`, () => {
      fillSignUpForm(form, {opts: {mergeWithDefault: true}});
      expect(form.valid).toEqual(true, `Form should be valid`);
    });

    for (const inputData of inputsTestData) {
      it(`should check if ${inputData.fieldName} value is absent`, () => {
        fillSignUpForm(component.form, {opts: {mergeWithDefault: true, withoutFieldName: inputData.fieldName}});
        expect(getFormField(inputData.fieldName).valid).toEqual(false, `${inputData.fieldName} is valid but value is absent`);
        expect(getFormField(inputData.fieldName).errors).toEqual(jasmine.objectContaining({required: true}),
          `FieldControl error object for "${inputData.fieldName}" should contain "required"`);
        expect(form.valid).toEqual(false, `Form is valid but "${inputData.fieldName}" is absent`);
      });

      it(`should check if ${inputData.fieldName} has invalid value`, () => {
        fillSignUpForm(form, {fields: {[inputData.fieldName]: inputData.invalidValue}, opts: {mergeWithDefault: true}});
        expect(getFormField(inputData.fieldName).valid).toEqual(false, `${inputData.fieldName} is valid but value is invalid`);
        expect(form.valid).toEqual(false, `Form is valid but "${inputData.fieldName}" has invalid value`);
      });
    }

    for (const {invalidValue, errorMessage} of passwordTestData) {
      it(`should check if password ${errorMessage}`, () => {
        fillSignUpForm(form, {fields: {password: invalidValue}, opts: {mergeWithDefault: true}});
        expect(getFormField(InputNames.password).valid).toEqual(false, `Password is valid but value ${errorMessage}`);
        expect(form.valid).toEqual(false, `Form is valid but password is ${errorMessage}`);
      });
    }
  });

  describe('sighup api', () => {
    it('should send user data', () => {
      const userData = {
        firstName: 'Name',
        lastName: 'Last',
        email: 'mail@gmail.com'
      };

      userApi.createUser(userData);
      const req = httpTestingController.expectOne(`${environment.apiUrl}/users`);
      expect(req.request.method).toEqual('POST');
    });
  });
});


