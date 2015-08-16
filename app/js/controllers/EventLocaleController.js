'use strict';

eventsApp.controller('EventLocaleController',
	function EventLocaleController($scope, $locale) {

		$scope.myDate = Date.now();
		$scope.myFormat	= $locale.DATETIME_FORMATS.fullDate;
		console.log($locale);

		// sample of coding error to test our custom exception handling
		//throw { message: 'my hello world error message'};
	});