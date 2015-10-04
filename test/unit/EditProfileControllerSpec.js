'use strict';

//testing the scope that a controller creates

describe('EditProfileControllerSpec', function() {
	var $controllerConstructor;
	var scope;
	var mockGravatarUrlBuilder;

	beforeEach(module("eventsApp"));

	beforeEach(inject(function($controller, $rootScope) {
		$controllerConstructor = $controller;
		scope = $rootScope.$new();
		mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl: function() {}})
	})) 

	it('Should set build the Gravatar with a given email address', function() {
		var email = "gjer0005@umn.edu";
		//mockGravatarUrlBuilder.buildGravatarUrl.returns(mockEvents);

		var ctrl = $controllerConstructor("EditProfileController",
			{'$scope':scope, gravatarUrlBuilder: mockGravatarUrlBuilder});

		scope.getGravatarUrl(email);

		expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
	})
});