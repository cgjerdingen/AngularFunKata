'use strict';

// controller starts with an empty scope
eventsApp.controller('EventController',
    function EventController($scope, $sce, eventData, $routeParams, $route) {

        $scope.sortorder = 'name';

        //$scope.event = $route.current.locals.event;

        $scope.event = eventData.getEventData($routeParams.eventId)
            .$promise.then(
                function(event) { $scope.event = event; console.log(event); },
                function(response) { console.log(response); }
                );

        $scope.reload = function() {
            $route.reload();
        }


        console.log($route.current.pathParams.eventId);
        console.log($route.current.params.eventId);
        console.log($route.current.params.doo);
        console.log($route.current.foo);
        console.log($route.current.params.foo);
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

        $scope.scrollToSession = function () {
            $anchorScroll();
                
        }
        

    }
);