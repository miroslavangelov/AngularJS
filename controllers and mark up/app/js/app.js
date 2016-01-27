'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/videos.html',
        controller: 'videoController'
    });
    $routeProvider.when('/add', {
        templateUrl: 'templates/add-video.html',
        controller: 'videoController'
    });
});