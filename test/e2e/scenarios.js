'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('event registration app', function() {

	describe('events page', function() {
		beforeEach(function() {
			browser.get('http://localhost:8000/events/');
		})

		it('Should have the correct title and first event', function() {
			var list = element.all(by.repeater('event in events'));

			expect(list.count()).toEqual(5);

			var titleElement = element(by.binding('event.name'));
			expect(titleElement.getText()).toEqual('Angular Boot Camp');
		});
	});

	describe('events details page', function() {
		beforeEach(function() {
			browser.get('http://localhost:8000/event/1');
		})

		it('Should sort sessions by name', function() {
			var list = element.all(by.repeater('session in event.sessions'));
			var titleElement = list.first().element(by.binding('title'));
			expect(titleElement.getText()).toEqual('Directives Masterclass');
		});

		it('Should have 3 sessions', function() {
			var list = element.all(by.repeater('session in event.sessions'));
			
			expect(list.count()).toEqual(3);
		});
	});

});
