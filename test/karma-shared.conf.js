module.exports = function() {
  return {
    basePath: '../',
    frameworks: ['mocha'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: true,

    // these are default values anyway
    singleRun: false,
    colors: true,
    
    files : [
      'build/dist/deps-debug.js',
      'deps/js/angular-mocks/angular-mocks.js',
      'src/js/config.js',
      'build/dist/web/templates-debug.js',
      'build/dist/web/ripple-client-debug.js',

      //Test-Specific Code
      'node_modules/chai/chai.js',
      'test/lib/chai-should.js',
      'test/lib/chai-expect.js'
    ]
  }
};
