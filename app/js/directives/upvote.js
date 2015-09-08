'use strict';

eventsApp.directive('upVote', function() {
	return {
		restrict: 'E',
		replace: true, // verse append or inject : don't include the base element
		templateUrl: '/templates/directives/upvote.html',
		scope: {
			upvote: "&", // & means execute in parent scope, not this isolate scope
			downvote: "&",
			count: "="
		}
	};
});


