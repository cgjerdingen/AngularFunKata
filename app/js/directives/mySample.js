'use strict';

eventsApp.directive('mySample', function($compile) {
	return {
		// restrict: 'E', -- element
		// restrict: "M"  --comment
		restrict: 'C', // class
		template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>",
		// link: function(scope, element, attrs, controller) {
		// 	var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
		// 	angular.element(element).html($compile(markup)(scope));
		//}
		scope: {

		}
	};
});