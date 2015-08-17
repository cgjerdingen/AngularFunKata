'use strict';
// Seed app
//var myApp = angular.module('myApp', []);
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngSanitize', 'ngCookies', 'ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider.when('/newEvent',
			{
				templateUrl:'templates/NewEvent.html',
				controller: 'EditEventController'	
			});
		$routeProvider.when('/events',
			{
				templateUrl:'templates/EventList.html',
				controller: 'EventListController'	
			});
		$routeProvider.when('/event/:eventId',
			{
				foo: "bar",
				templateUrl:'templates/EventDetails.html',
				controller: 'EventController'
				// resolve: {
				// 	event: function($route, eventData) {
				// 		return eventData.getEventData($route.current.pathParams.eventId).$promise;
				// 	}
				//}	
			});
		$routeProvider.otherwise({redirectTo: '/events'});
		$locationProvider.html5Mode(true);
	})
	.factory('myCache', function($cacheFactory) {
		return $cacheFactory('myCache', {capacity:3});
	}); 
