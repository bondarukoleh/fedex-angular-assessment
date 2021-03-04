import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SignupComponent} from './components/signup/signup.component';


import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from './components/signup/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
