'use strict';

eventsApp.filter('durations', function() {
	return(function(duration) {
		switch(duration) {
			case 1:
				return "30 Minutes";
			case 2:
				return "1 Hour";
			case 3:
				return "1 Hour 30 Minutes";
			case 4:
				return "2 Hours";
			case 5:
				return "Morning Session";
			case 6:
				return "Afternoon Session";
			case 5:
				return "Full Day Session";
		}
	});
});