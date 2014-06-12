module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],
    basePath: '../',

    files: [
      'build/dist/deps-debug.js',
      'deps/js/angular-mocks/angular-mocks.js',
      'src/js/config.js',
      'build/dist/web/ripple-client-debug.js',
      'test/unit/**/*.js'
    ],

    preprocessors: {
      'build/dist/web/ripple-client-debug.js' : 'coverage'
    },

    reporters: ['coverage'],

    coverageReporter : {
      type : 'text',
      dir : 'coverage/',
      type : 'lcov'
    },

    browsers: ['Chrome', 'Firefox'],
    singleRun: false,
    autoWatch: true
  });
};
