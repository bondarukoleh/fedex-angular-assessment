### Task
*Description*
 - Build a single page app with a sign-up form. 
 - The form should allow users to enter first name, last name, email, and password.
 - All fields are required.
 - Password validation:
    - Should be a minimum of eight characters,
    - Should contain lower and uppercase letters,
    - Should not contain user’s first or last name.
 - Email should be validated but there are various ways of accomplishing this. So, show us what you consider as a proper email validation.
 - The form should send a POST request to https://demo-api.now.sh/users. The request body
```js
/* example: */
{
  firstName: "Thomas",
  lastName: "Shelby",
  email: "thomas@shelby.co.uk"
}
```

### How to do it
- Use the latest version of Angular in combination with TypeScript.
- UX/UI can be based on a CSS Framework (or do it yourself with minimal effort).
- You can target browsers that support ES6. Do not worry about supporting old browser versions.
- Make your solution available on GitHub or GitLab or Bitbucket.

### How we review
Your application will be reviewed by two of our engineers. We take your experience level into consideration. The aspects of your code we will assess include:
- Correctness – Is it production-ready application? Does the application do what was asked? If 
  not, does the README explain why it is missing and/or different?
- Code quality – Are there any code smells? Is the coding style consistent with the Angular style 
  guide?
- Testing – Is your logic covered with unit or integration tests?
- UX – Is the web interface understandable and pleasing to use?
- Documentation – Is there a README covering how to build and run your project?
- Technical choices – Are choices of libraries, architecture etc. appropriate for the task?
