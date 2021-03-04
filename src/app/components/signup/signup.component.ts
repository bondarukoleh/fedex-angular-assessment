import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {passwordValidation} from '../../helpers/validators';

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

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    }, {validators: passwordValidation});
  }

  get inputs(): { name: string, placeholder: string, type: string, iconClass: string }[] {
    return sighUpFormsFields;
  }

  onSubmit(): Promise<boolean> {
    this.formSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    sighUpFormsFields.forEach(({name}) => console.log(this.form.controls[name].value));
  }
}
