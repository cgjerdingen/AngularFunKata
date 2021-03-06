'use strict';

eventsApp.controller('MainMenuController',
	function MainMenuController($scope, $location) {
		
		// console.log('absUrl: ', $location.absUrl());
		// console.log('protocol: ', $location.protocol());
		// console.log('port: ', $location.port());
		// console.log('search: ', $location.search());
		// console.log('hash: ', $location.hash());
		// console.log('url: ', $location.url());

		$scope.createEvent = function() {
			//$location.replace();			
			$location.url('/newEvent');
		};
		$scope.eventsHome = function() {			
			$location.url('/events');
		};
		$scope.editProfile = function() {
			$location.url('/editProfile');
		};
		$scope.eventLocale = function() {
			$location.url('/eventLocale');
		}
	});