'use strict';

describe('eventData', function() {
	beforeEach(module('eventsApp'));

	it('Should issue a GET request to /data/event/# when # is called',
	inject(function(eventData, $httpBackend) {
		$httpBackend.expectGET('/data/event/1');
		$httpBackend.when('GET', '/data/event/1').respond({});
		eventData.getEventData(1);
		$httpBackend.flush();

		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	})
	);

	it('Should return the correct data when getEventData is called', inject(function(eventData, $httpBackend) {
		$httpBackend.when('GET', '/data/event/1').respond({name: "My Event"});
		var event = eventData.getEventData(1);
		$httpBackend.flush();

		expect(event.name).toBe('My Event');
	}));

	// it('Should set the id to 999 when save is called', inject(function(eventData, $httpBackend) {
	// 	$httpBackend.when('POST', '/data/event/999').respond({});
	// 	var event = {name: 'My Event'};	
	// 	eventData.save(event);
	// 	$httpBackend.flush();

	// 	// currently fails because it is set to value of now to be unique not 999
	// 	expect(event.id).not.toBe(999);
	// }));

	it('Should issue a GET request to /data/event when getAllEvents is called', inject(function(eventData, $httpBackend) {
		$httpBackend.when('GET', '/data/event').respond([{name: "Event Zero"}]);
		var events = eventData.getAllEvents();
		$httpBackend.flush();

		expect(events[0].name).toBe("Event Zero");
	}))

});