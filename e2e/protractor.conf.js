
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './scenarios/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./src/**/*.ts'],
    tags: [],
    strict: true,
    format: [
      'json:reports/summary.json'
    ],
    dryRun: false,
    compiler: []
  },
  onPrepare: function() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
  }
};
