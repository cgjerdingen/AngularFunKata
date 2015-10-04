'use strict';

describe('EventListController', function() {
	var $controllerConstructor;
	var scope;
	var mockEventData;

	beforeEach(module("eventsApp"));

	beforeEach(inject(function($controller, $rootScope) {
		$controllerConstructor = $controller;
		scope = $rootScope.$new();
		mockEventData = sinon.stub({getAllEvents: function() {}})
	})) 

	it('Should set the scope events to the result of eventData.getAllEvents', function() {
		var mockEvents = {};
		mockEventData.getAllEvents.returns(mockEvents);

		var ctrl = $controllerConstructor("EventListController",
			{'$scope':scope, eventData: mockEventData});

		expect(scope.events).toBe(mockEvents);
	})
});