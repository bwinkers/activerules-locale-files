// Use Chai expect to assert our tests
var expect    = require("chai").expect;

// Our module should be up one level from the test directory
var arLocales = require("../index.js");
// 
// We need the full path to the current directory.
// We know where the relevant files are from there.
var thisDirectory = __dirname;

// Our test data is in a sub-directory of the test directory
var arRoot = thisDirectory + '/data/';

// Use English as the default locale
var locale = 'en';

// Describe what we expect from the module
describe('Module - activerules-locale-files', function() {
  
  // Most basic use case
  describe('Given a site with one locale', function() {
    it('the default and the site default filepaths are returned.', function () {
      
      // Mock site object to define its locale
      var site = {
        locales: ['en-US'],
        site: 'example'
      };
      
      // Mock languages that would accepted by the client
      var acceptLangs = ['en-US'];

      // Try to get calculated locale locations
      arLocales.getPaths(arRoot, acceptLangs, site)
      .then(function(localePaths) {
        console.log(localePaths);
        expect(localePaths.length).to.equal(2);
      })
    });
  });

});
