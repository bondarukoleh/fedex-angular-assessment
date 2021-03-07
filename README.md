# FedEx tech assessment
***
## Environment to run the app
#### Node.js
You need Node.js to be installed. Version should be **not lower 10.13.x**.
Checkout [Node install](https://nodejs.org/uk/download/ "https://nodejs.org/uk/download/") to install NodeJS.
To check that Node installed correctly run from your terminal:
`node --version`

#### Browser (only for e2e tests)
You need Chrome to be installed. It's a most common browser in the world, so I hope you have it.
Version should be **not lower 89**. You can check it in Browser settings -> Help -> About Google Chrome.
***
## How to run app
#### Clone repository
Run in terminal:
```shell
git clone https://github.com/bondarukoleh/fedex-angular-assessment.git;
```

#### Change directory to cloned project directory.
Run in terminal:
```shell
cd fedex-angular-assessment;
```

#### Install project dependencies.
Run in terminal:
```shell
npm install;
```

#### To run in the dev mode.
Run in terminal:
```shell
npm start;
```

***
## How to run the tests
#### Unit and Integration tests
In the directory of the project run in terminal:
```shell
 npm test;
```

#### e2e tests
Run in terminal:
```shell
 npm run e2e;
```
***
## Implementation solutions
#### Bootstrap
As a CSS framework I choose Bootstrap, for such a small app it saves you a lot of time.
You can check it [here](https://getbootstrap.com/ 'https://getbootstrap.com/')
For Bootstrap 4 to download some of the dependencies it needs jquery.

#### Forms
For forms, I used `ReactiveFormsModule` and `FormBuilder` to easy to create a form. \
For **validation** I used `Validators` and for the *password* validation I used custom [validator](./src/app/helpers/validators.ts) `ValidatorFn`.

#### Component
I've created the [Signup](./src/app/components/signup/signup.component.ts) component and add an [Input](./src/app/components/signup/input/input.component.ts) component to reduce code duplication. 

#### Testing
To improve the speed and performance of unit and integration tests I've used [ng-bullet](https://www.npmjs.com/package/ng-bullet "https://www.npmjs.com/package/ng-bullet") library.

##### e2e
For e2e tests there is build-in [protractor](https://www.protractortest.org/#/ "https://www.protractortest.org/#/"). \
Tests using Page Object pattern. Means we logically group functionality of the application by pages. \
Pages divided on Elements, is abstraction above regular HTML elements: buttons, inputs, selects, etc and Fragments - logically
grouped elements.

Elements can be reused in fragments and pages - which gives us flexibility, if something changed in an element (e.g. in Button), we need to fix it only in one place.

### Issues I've not solved yet
- not yet figured out how to test `ControlContainer` dependency in `Input` component;
- not yet figured out how to reset the form without validation triggering, so I used a little crutch with `control.setErrors(null)`

### Postscriptum
Thank you guys, this was interesting task for me, I've dived a little in Angular forms and testing.
