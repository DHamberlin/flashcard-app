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
    $http({
      method: 'POST',
      url: '/images',
      headers: {'Content-Type': 'application/json'},
      data: {data:$scope.card.word}
    })
    .then((response) => {
      $scope.pics = response.data.data.slice(0,8).map((picObj) => {
        // let gifUrl = picObj.embed_url.substring(5);
        let urlArr = picObj.embed_url.split('/');
        let gifCode = urlArr.pop();
        let gifUrl = `https://media.giphy.com/media/${gifCode}/giphy.gif`
        return gifUrl;
        // return $sce.trustAsResourceUrl(gifUrl);
      });
    })
  };

  $scope.expandImage = function($event) {

  }

  $scope.selectImage = function(event, pic) {
    $scope.card.pic = pic;
    $scope.card.example = 'Lorem Ipsum'
    console.log($scope.card);
    $http({
      method: 'POST',
      url: '/create',
      headers: {'Content-Type': 'application/json'},
      data: {data: $scope.card}
    })
    .then((response) => {
      console.log(response)
    })
    // .then(response) => {
    //   console.log(response);
    // }
  }

})
.controller('ReviewController', function($scope, $location, $http) {
  $http({
    method: 'GET',
    url: '/cards',
  })
  .then(res => console.log(res))
})
.run();
