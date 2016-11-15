var myApp = angular.module('myApp', ['ngRoute'])
myApp.config(function($routeProvider){
    $routeProvider
        .when('/players', {
            templateUrl: 'partials/players.html'
        })
        .when('/teams', {
            templateUrl:'partials/teams.html'
        })
        .when('/associations',{
            templateUrl:'partials/associations.html'
        })

});