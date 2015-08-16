'use strict';

eventsApp.controller('EventFilterController',
	// using direct injection
	function EventFilterController($scope, durationsFilter) {
	// using the $filter service 
	// function EventFilterController($scope, $filter) {

		// enpty data container to hold content
		$scope.data = {};

		// using the $filter service 
		//var durations = $filter('durations');
		$scope.data.duration1 = durationsFilter(1);
		$scope.data.duration2 = durationsFilter(2);
		$scope.data.duration3 = durationsFilter(3);
		$scope.data.duration4 = durationsFilter(4);
	});