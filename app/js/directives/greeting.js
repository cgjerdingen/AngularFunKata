'use strict';

// self contained directive 

eventsApp.directive('greeting', function(){
	return {
		restrict: 'E',
		replace: true,
		priority: 1,
		template: "<button class='btn' ng-click='sayHello()'></button>",
		// controller: 'GreetingController'
		controller: '@',
		name: 'ctrl' //  use to name controler in attribute in html element
		};
	})
.directive('japanese', function() {
	return {
		restrict: 'A',
		priority: 1,
		require: 'greeting',
		link: function(scope, element, attrs, controller) {
			controller.addGreeting('ohiyo');
		}
	};
});

eventsApp.controller('GreetingController', function() {
	function GreetingController($scope) {
		var greetings = ['hello'];
		$scope.sayHello = function() {
			alert(greetings.join);
		};
		this.addGreeting = function(greeting) {
			greetings.push(greeting);
		};
	};
});

