'use scrict';

eventsApp.controller('EditEventController', 
	function($scope) {
		$scope.saveEvent = function(event, eventForm) {
			console.log(eventForm);
			if (eventForm.$valid) {
				window.alert(event.name + " saved.");
			}

		};

		$scope.cancelEdit = function() {
			window.location = "/EventDetails.html";
		}

	}
);