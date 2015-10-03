'use strict';

eventsApp.directive("collapsible", function() {
	return {
		restrict: 'E',
		replace: true,
		template: '<div><h4 class="well-title linkwell" ng-click="toggleVisibilty()">{{title}}</h4><div ng-show="visible" ng-transclude></div></div>',
		controller: function($scope) {
			$scope.visible = true;	

			$scope.toggleVisibilty = function()
			{
				$scope.visible = !$scope.visible;
			}
		},
		transclude: true,
		scope: {
			title: '@'
		} 
	}
});