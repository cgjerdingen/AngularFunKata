'use strict';

// controller starts with an empty scope
eventsApp.controller('EventController', ['$scope', '$sce', 'eventData',
    function EventController($scope, $sce, eventData) {

        $scope.sortorder = 'name';

        eventData.getEventData()
            .$promise.then(
                function(event) { $scope.event = event; console.log(event); },
                function(response) { console.log(response); }
                );

        // $scope.event = eventData.getEventData();

        //$scope.snippet = '<span style="color:red">hi there</span>';
        //$scope.snippetUnsafe = $sce.trustAsHtml($scope.snippet);
        // $scope.event = eventData.getEventData().then(
        //     //resolve - success
        //     function(event) { $scope.event = event; },
        //     //reject - fail
        //     function(statusCode) { console.log(statusCode); }

        // );

        

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
        

    }
]);