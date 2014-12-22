'use strict';

/* App Module */

var hackApp = angular.module('hackApp', [
    'ngRoute',

    'hackControllers',
    'hackServices'
]);

hackApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/view1', {
                templateUrl: 'partials/view1.html',
                controller: 'LineStaticCtrl'
            }).
            when('/view2', {
                templateUrl: 'partials/view2.html'
            }).
            otherwise({
                redirectTo: '/view1'
            });
    }]);