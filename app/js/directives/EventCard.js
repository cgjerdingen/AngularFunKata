'use strict';

eventsApp.directive('eventCard', function() {
	return {
		restrict: 'E',
		replace: true, // verse append or inject : don't include the base element
		templateUrl: '/templates/directives/eventCard.html',
		scope: {
			event: "=event"
		}
	};
});


