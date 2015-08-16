'use strict';

eventsApp.controller('EventCacheController',
	function EventCacheController($scope, myCache) {
		$scope.addToCache = function(key, value) {
			myCache.put(key, value);
		};

		$scope.readFromCache = function(key) {
			return myCache.get(key);
		};

		$scope.getCacheStats = function() {
			return myCache.info();
		};
	});