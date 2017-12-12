angular.module("Zophias", ['ngRoute', 'RouteControllers']);

angular.module("Zophias").config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true); // Enable href routing without hashes

    $routeProvider.when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController',
            
        })
        .when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'AboutController',
            
        })
        .when('/treatments', {
            templateUrl: 'templates/treatments.html',
            controller: 'TreatmentsController',
            
        })
        .when('/courses', {
            templateUrl: 'templates/courses.html',
            controller: 'CoursesController',
            
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
            controller: 'ContactController',
            
        });
});