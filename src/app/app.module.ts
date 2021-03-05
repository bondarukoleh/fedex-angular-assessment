import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SignupComponent} from './components/signup/signup.component';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from './components/signup/input/input.component';
import {Request} from './helpers/request';
import {UserApi} from './api/userApi';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserApi, Request],
  bootstrap: [AppComponent]
})
export class AppModule {
}
