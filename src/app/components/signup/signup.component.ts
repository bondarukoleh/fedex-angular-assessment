import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {passwordValidation} from '../../helpers/validators';
import {HttpClient} from '@angular/common/http';
import {UserApi} from '../../api/userApi';

const sighUpFormsFields = [
  {name: 'firstName', placeholder: 'First Name', type: 'text', iconClass: 'fa fa-user'},
  {name: 'lastName', placeholder: 'Last Name', type: 'text', iconClass: 'fa fa-user'},
  {name: 'email', placeholder: 'Email', type: 'email', iconClass: 'fa fa-envelope'},
  {name: 'password', placeholder: 'Password', type: 'password', iconClass: 'fa fa-lock'},
];

@Component({
  templateUrl: 'signup.component.html',
  selector: 'app-signup'
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private userApi: UserApi) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    }, {validators: passwordValidation});
  }

  get inputs(): { name: string, placeholder: string, type: string, iconClass: string }[] {
    return sighUpFormsFields;
  }

  async onSubmit(): Promise<void> {
    this.formSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    await this.userApi.createUser({
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
      email: this.form.controls.email.value,
    });

    this.resetForm();
  }

  private resetForm(): void {
    this.form.reset();
    /* To not trigger the validation */
    Object.keys(this.form.controls).forEach(key => this.form.controls[key].setErrors(null));
  }
}
