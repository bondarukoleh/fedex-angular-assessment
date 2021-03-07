// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
const {NODE_ENV, PROD_URL, APP_PORT} = process.env;
const APP_URL = NODE_ENV === 'development' ? `http://localhost:${APP_PORT ? APP_PORT : 4200}` : PROD_URL;

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/specs/**/*.spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: APP_URL,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
  }
};
