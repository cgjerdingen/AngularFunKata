'use scrict';

eventsApp.controller('EditEventController', 
	function($scope, eventData) {
		$scope.saveEvent = function(event, eventForm) {
			console.log(eventForm);
			if (eventForm.$valid) {
				eventData.save(event)
					.$promise.then(
						function(response) { console.log('success', response) },
						function(response) { console.log('failure', response)}
						);
			}

		};

		$scope.cancelEdit = function() {
			window.location = "/EventDetails.html";
		}

	}
);