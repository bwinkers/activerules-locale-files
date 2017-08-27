// Use Chai expect to assert our tests
var expect    = require("chai").expect;

// Our module should be up one level from the test directory
var arLocales = require("../index.js");

// Use English as the default locale
var locale = 'en';

// Describe what we expect from the module
describe('Module - activerules-locale-files', function() {
  
  // Most basic use case
  describe('Given a site with one locale', function() {
    it('the default and the site default filepaths are returned.', function () {
      
      // Mock site object to define its locale
      var site = {
        locales: ['en']        
      };
      
      // Mock language requersted by the client
      var acceptLang = 'en';

      // Try to get calculated locale locations
      arLocales(site, acceptLang)
      .then(function(localePaths) {
        expect(localePaths.length).to.equal(2);
      })
    });
  });

});
