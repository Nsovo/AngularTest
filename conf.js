
// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4200/',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'Chrome'
  }
};
