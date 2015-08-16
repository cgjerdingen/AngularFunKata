'use strict';

eventsApp.controller('EventCompileController',
	function EventCompileController($scope, $compile, $parse) {

		var fn = $parse('1 + 2');
		console.log(fn());

		var getter = $parse('event.name');

		var context1 = {event: {name: 'AngularJS parsing and compeling'}};
		var context2 = {event: {name: 'AngularJS modules and factories'}};

		console.log(getter(context1));
		console.log(getter(context2));

		var setter = getter.assign;
		setter(context2, 'Creating a Code Retreat');

		//context 1 will override 2
		console.log(getter(context2, context1));



		$scope.appendDivToElement = function(markup) {
			return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
		}
	});