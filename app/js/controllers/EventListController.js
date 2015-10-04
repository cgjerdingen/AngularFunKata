'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, eventData) {
      $scope.events = eventData.getAllEvents();

      $scope.navigateToDetails = function (event) {
        $location.url('/event/' + event.id);
      };
    }
);