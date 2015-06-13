'use strict';

<<<<<<< HEAD
/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
=======
>>>>>>> d6a9f7937cd2278f87ce2c9e2d3a0f083d904aa4
