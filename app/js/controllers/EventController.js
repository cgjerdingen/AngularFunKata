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
                    name: 'Master Directives',
                    creatorName:'Craig Gjerdingen',
                    duration:'2 hrs',
                    level: '300',
                    abstr: 'This session will Bonbon sesame snaps jelly jelly macaroon brownie candy. Biscuit wafer lollipop chocolate cake. Bear claw sweet roll brownie wafer biscuit cake. Brownie pastry cotton candy pastry gingerbread bonbon apple pie. Sesame snaps jelly pie. Biscuit danish apple pie jelly-o cake tart cake. Lemon drops tootsie roll sweet lemon drops halvah.'
                },
                {
                    name: 'Master Scope',
                    creatorName: 'Guy Gaskin',
                    duration: '1.5 hrs',
                    level: '100',
                    abstr: 'This session will check it out doggy fo shizzle my nizzle. Nullam fo shizzle velizzle, pimpin volutpizzle, suscipizzle quis, gravida vizzle, boofron. Pellentesque get down get down fizzle. Shit erizzle. Fizzle fo shizzle dolizzle get down get down'
                },
                {
                    name: 'Master Controllers',
                    creatorName: 'Chan Li',
                    duration: '2 hrs',
                    level: '200',
                    abstr: 'This session will rub face on owner chew iPad power cord leave dead animals as gifts. Spread kitty litter all over house cough furball but rub face on owner and sit by the fire but chew iPad power cord, and roll on the floor purring your whiskers off. Chew foot. Play '
                }
            ]
        }
    }
);