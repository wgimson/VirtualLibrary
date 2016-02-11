'use strict';

angular.module('myApp.listView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'listView/listView.html',
    controller: 'listViewController'
  });
}])

.controller('listViewController', ['$scope', '$http', function($scope, $http) {
	console.log('Calling Get All books from Angular');
	$http.get('../api/books/')
		 .then(function(response) {
		 	$scope.books = response.data;
		 	console.log('Succesfully fetched: ' + $scope.books);
		 }, function(err) {
		 	console.log('Error: ' + err.data);
		 });
}]);