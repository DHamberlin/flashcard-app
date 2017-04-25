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

.controller('AddController', function($scope, $http, $sce) {
  $scope.card = {};

  $scope.getImages = function() {
    console.log(JSON.stringify($scope.card.word))
    $http({
      method: 'POST',
      url: '/images',
      headers: {'Content-Type': 'application/json'},
      data: {data:$scope.card.word}
    })
    .then((response) => {
      $scope.pics = response.data.data.slice(0,8).map((picObj) => {
        let url = picObj.embed_url.substring(5);
        return $sce.trustAsResourceUrl(url);
      });
      // $scope.pics = _.pluck(response.data.data.slice(0, 6), 'embed_url');
      console.log($scope.pics);
    })
  };

  $scope.selectImage = function(pic) {
    console.log(pic);
  }

  $scope.setGif

})
.controller('ReviewController', function($scope, $location) {

})
.run();
