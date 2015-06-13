'use strict';

<<<<<<< HEAD
/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
=======
>>>>>>> d6a9f7937cd2278f87ce2c9e2d3a0f083d904aa4
