'use strict';
// Seed app
//var myApp = angular.module('myApp', []);
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngSanitize', 'ngCookies'])
	.factory('myCache', function($cacheFactory) {
		return $cacheFactory('myCache', {capacity:3});
	}); 
