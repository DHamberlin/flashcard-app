angular.module('trenchcoat', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/home.html',
      controller: 'ReviewController'
    })
    .when('/newCard', {
      templateUrl: './views/newCard.html',
      controller: 'AddController'
    })
    .when('/review', {
      templateUrl: './views/review.html',
      controller: 'ReviewController'
    })
    .when('/logout', {
      templateUrl: './views/logout.html',
      controller: 'ReviewController'
    })
})
.factory('Factory', function($http, $location) {

})
.controller('AddController', function($scope, $location) {

})
.controller('ReviewController', function($scope, $location) {

})
.run();
