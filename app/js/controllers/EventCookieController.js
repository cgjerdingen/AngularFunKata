'use strict';

eventsApp.controller('EventCookieController',

	function EventCookieController($scope, $cookieStore) {
		$scope.event = {id: 900, name: "Naming Angular Variables"};

		$scope.saveEventToCookie = function(event) {
			$cookieStore.put('event', event);
		};

		$scope.getEventFromCookie = function() {
			console.log($cookieStore.get('event'));
		};

		$scope.removeEventCookie = function() {
			$cookieStore.remove('event');
		};
	});