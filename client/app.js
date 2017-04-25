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
    .when('/choosePic', {
      templateUrl: './views/choosePic.html',
      controller: 'ReviewController'
    })
})

.factory('Factory', function($http, $location) {

})

.controller('AddController', function($scope, $http) {
  $scope.card = {};

  $scope.getImages = function() {
    console.log($scope.card.word)
    $http.post("images", $scope.card.word)
    .then((response) => {
      $scope.pics = response.data.data.map((picObj) => {
        return picObj.embed_url.substring(5);
      }).slice(0,6);
      // $scope.pics = _.pluck(response.data.data.slice(0, 6), 'embed_url');
      console.log($scope.pics);
    })
  };

  $scope.selectImage = function(pic) {
    console.log(pic);
  }

})
.controller('ReviewController', function($scope, $location) {

})
.run();
