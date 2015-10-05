'use strict';
// Seed app
//var myApp = angular.module('myApp', []);





// var eventsApp = angular.module('eventsApp', ['ngResource', 'ngSanitize', 'ngCookies',  'ngRoute']);
// eventsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//     $routeProvider.when('/events', {templateUrl: '/partials/eventList.html', controller: 'EventListController'});
//     $routeProvider.when('/events/:eventId/sessions/edit/:sessionId', {templateUrl: '/partials/editSession.html', controller: 'EditSessionController'});
//     $routeProvider.when('/events/:eventId/sessions/new', {templateUrl: '/partials/editSession.html', controller: 'EditSessionController'});
//     $routeProvider.when('/event/:eventId', {templateUrl: '/partials/event.html', controller: 'EventController'});
//     $routeProvider.when('/events/new', {templateUrl: '/partials/editEvent.html', controller: 'EditEventController'});
//     $routeProvider.when('/events/edit/:eventId', {templateUrl: '/partials/editEvent.html', controller: 'EditEventController'});
//     $routeProvider.when('/register', {templateUrl: '/partials/editProfile.html', controller: 'EditProfileController'});
//     $routeProvider.when('/editProfile', {templateUrl: '/partials/editProfile.html', controller: 'EditProfileController'});
//     $routeProvider.when('/viewProfile/:userName', {templateUrl: '/partials/viewProfile.html', controller: 'ViewProfileController'});
//     $routeProvider.when('/login', {templateUrl: '/partials/login.html', controller: 'LoginController'});
//     $routeProvider.otherwise({redirectTo: '/events'});
//     $locationProvider.html5Mode(true);
//   }]);


// var eventsApp = angular.module('eventsApp', ['ngResource', 'ngSanitize', 'ngCookies', 'ngRoute']);
// eventsApp.config(function($routeProvider, $locationProvider) {
// 		$routeProvider.when('/newEvent',
// 			{
// 				templateUrl:'templates/NewEvent.html',
// 				controller: 'EditEventController'	
// 			});
// 		$routeProvider.when('/events',
// 			{
// 				templateUrl:'templates/EventList.html',
// 				controller: 'EventListController'	
// 			});
// 		$routeProvider.when('/event/:eventId',
// 			{
// 				foo: "bar",
// 				templateUrl:'templates/EventDetails.html',
// 				controller: 'EventController'
// 				// resolve: {
// 				// 	event: function($route, eventData) {
// 				// 		return eventData.getEventData($route.current.pathParams.eventId).$promise;
// 				// 	}
// 				//}	
// 			});
// 		$routeProvider.when('/sample',
// 			{
// 				templateUrl: 'templates/SampleDirective.html',
// 				controller: 'SampleDirectiveController'
// 			});
// 		$routeProvider.otherwise({redirectTo: '/events'});
// 		$locationProvider.html5Mode(true);
// 	})
// 	.factory('myCache', function($cacheFactory) {
// 		return $cacheFactory('myCache', {capacity:3});
// 	}); 


var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            })
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                foo: 'bar',
                templateUrl: '/templates/EventDetails.html',
                controller: 'EventController',
                resolve: {
                    event: function($route, eventData) {
                        return eventData.getEventData($route.current.pathParams.eventId).$promise;
                    }
                }
            });
        $routeProvider.when('/editProfile', 
            {
                templateUrl: '/templates/EditProfile.html', 
                controller: 'EditProfileController'
            });
        $routeProvider.when('/eventLocale', 
            {
                templateUrl: '/templates/eventLocale.html', 
                controller: 'EventLocaleController'
            });
        $routeProvider.when('/sampleDirective',
            {
                templateUrl: 'templates/SampleDirective.html',
                controller: 'SampleDirectiveController'
            });
        $routeProvider.otherwise({redirectTo: '/events'});
        $locationProvider.html5Mode(true);
    });
