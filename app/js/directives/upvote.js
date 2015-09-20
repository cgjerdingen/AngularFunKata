'use strict';

eventsApp.directive('upvote', function() {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: '/templates/directives/upvote.html',
		scope: {
			upvote: "&",
			downvote: "&",
			count: "="
		}
	};
});
//replace: true, // verse append or inject : don't include the base element
//upvote: "&", // & means execute in parent scope, not this isolate scope
