import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

const sighUpFormsFields = [
  {name: 'firstName', placeholder: 'First Name', type: 'text'},
  {name: 'lastName', placeholder: 'Last Name', type: 'text'},
  {name: 'email', placeholder: 'Email', type: 'email'},
  {name: 'password', placeholder: 'Password', type: 'password'},
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
      firstName: ['', [Validators.required, Validators.maxLength(10)]],
      lastName: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(10)]]
    });
  }

  get inputs(): { name: string, placeholder: string, type: string }[] {
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
