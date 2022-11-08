var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
  $http.get("https://cryptopanic.com/api/v1/posts/?auth_token=d968ebc61c97a5aca86f3b42d605efd5f86b6eef&filter=hot&kind=news").then(function(response) {
    $scope.myData = response.data.results;
  });
});
// Locate the data records

