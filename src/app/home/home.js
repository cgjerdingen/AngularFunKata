﻿angular.module('home', [
  'ui.router'
])

.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.tpl.html'
            }
        },
        data: { pageTitle: 'Home' }
    });
})

.controller('HomeCtrl', function ($scope) {
})

;