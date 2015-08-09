'use scrict';

eventsApp.controller('EditEventController', 
	function($scope) {
		$scope.saveEvent = function(event, eventForm) {
			if (eventForm.$valid) {
				window.alert(event.name + " saved.");
			}

		};

		$scope.cancelEdit = function() {
			window.location = "/EventDetails.html";
		}

	}
);