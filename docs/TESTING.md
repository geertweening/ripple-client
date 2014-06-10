# Testing 

## Configuration
For testing `ripple-client` we use Karma as the test runner with `mocha` as the test runner.
The configuration lives in `test/karma.conf.js`. The tests are run in both `Chrome` and `Firefox`

## Type of tests
Test can be split up in three different ways:

* Unit testing: 
    * code-level testing
    * sandboxed and isolated testing
    * mocking and stubbing required, e.g. XHR requests
* Midway testing:
    * application level testing
    * can access multiple part of an application
    * tests logic flow
* E2E testing:
    * integration testing
    * test rendered html result

The goal is to support these three different types of testing to get great coverage across the `ripple-client`
Inspiration by [Year of Moo - Full-Spectrum Testing with AngularJS and Karma](http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html)

### Unit tests
location: `test/unit`

### Midway tests
WIP
The unit tests are more functional right now, we need to separate unit tests and functional tests out better 

### End-to-End tests
location: `test/e2e`
currently not working, need to be rewritten

### Running the test
`npm test`