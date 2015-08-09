'use strict';

// controller starts with an empty scope
eventsApp.controller('EventController', ['$scope', '$sce', 'eventData'
    function EventController($scope, $sce, eventData) {

        $scope.sortorder = 'name';

        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.snippetUnsafe = $sce.trustAsHtml($scope.snippet);
        $scope.event = eventData.event;

        

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
        

    }
]);