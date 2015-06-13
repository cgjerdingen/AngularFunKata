'use strict';

// controller starts with an empty scope
eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '01/01/2015',
            time: '11:20 am',
            location: {
                address: '1925 South 3rd St',
                city: 'Minneapolis',
                state: 'MN',
                zip: '55455'
            },
            imageUrl: 'img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Master Directives'
                },
                {
                    name: 'Master Scope'
                },
                {
                    name: 'Master Controllers'
                }
            ]
        }
    }
);