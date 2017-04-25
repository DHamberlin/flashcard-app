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
.controller('AddController', function($scope, $http) {
  // $http.defaults.useXDomain = true;
  $scope.card = {};
  $scope.getImages = function() {
    console.log($scope.card.word)
    $http.get(`giphy/${$scope.card.word}`)
    .then((response) => {
      console.log('response: ', response);
    })
  }

})
.controller('ReviewController', function($scope, $location) {

})
.run();
