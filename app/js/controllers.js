'use strict';

/* Controllers */

var hackControllers = angular.module('hackControllers', []);


hackControllers.controller('LineStaticCtrl', ['$scope','$http','LineChart',function ($scope, $http, LineChart) {
    $http.get('fixture/line.json').success(function(data) {
//        $scope.data = data;
        LineChart.line(data);
    });

}]);