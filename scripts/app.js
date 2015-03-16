var profile = angular.module("profile", ['ngRoute', 'ngMaterial']);
profile.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "views/home.html",
      controller: "MyController"
    })
    .when('/about', {
      templateUrl: "views/about.html",
      controller: "MyController"
    })
    .when('/projects', {
      templateUrl: "views/projects.html",
      controller: "projectController"
    })
    .when('/contact', {
      templateUrl: "views/contact.html",
      controller: "contactController"
    });
}]);
profile.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('orange');
});
