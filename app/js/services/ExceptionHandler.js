'use strict';

//$exceptionHandler $ overrides the current service
// usually you dont want to do this. in this case it is what we want
eventsApp.factory('$exceptionHandler', function() {
	return function(exception) {
		console.log("exception handled: " + exception.message);
	};
});