'use strict';

/* Controllers */

var hackControllers = angular.module('hackControllers', []);


hackControllers.controller('LineStaticCtrl', ['$routeParams','$scope','$http','LineChart',function ($routeParams,$scope,$http,LineChart) {
    $scope.suburbs = ["richmond-vic-3121","melbourne-vic-3000"];
    $http.get('fixture/suburbs/'+$routeParams.suburb+'.json').success(function(data) {
        LineChart.line(data);
    });

}]);