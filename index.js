'use strict;'

/**
 *  This module calculates which localization files ActiveRules attempts to load.
 *  The files may or may not exist, AR is designed to use whatever is found.
 *  
 *  This module accounts for the various locales within an ActiveRules site.
 */

// Provides great promises
var Promise = require("bluebird");

// Create the return object
var AR = function () {};

// The array of paths to check for locale files give a set of acceptLangs
var localePaths = [];

/**
 * 
 * @param string arRoot
 * @param array acceptLangs In order of preference
 * @param object site
 * @returns {nm$_index.Promise}
 */
AR.prototype.getPaths = function (arRoot, acceptLangs, site) {
    
    return new Promise(
        function (resolve, reject) {
            
            // Within the arRoot everything is broken up by site.
            // There is a always a `default` site that generic text for all apps.
            // Site text should override the default text
            
            // Within both the default and specific site the data is within `/locales`
            // The default may have a different set of mapped locales than the individual site.
            
            // The base language is the first one provided
            var baseLang = acceptLangs[0];
            var localeStr = baseLang.substring(0,2);
            
            localePaths.push('/' + arRoot.replace(/^\/+|\/+$/g, '') +  '/default/locales/' + localeStr  );
            
            localePaths.push('/' + arRoot.replace(/^\/+|\/+$/g, '') +  '/' + site.site + '/locales/' + localeStr  );
            
            resolve(localePaths);
            
      }
    );
};

// Export a new instance of the object/function
module.exports = exports = new AR();

