'use strict';

/* App Module */

var hackApp = angular.module('hackApp', [
    'ngRoute',
    'ui.bootstrap',

    'hackControllers',
    'hackServices'
]);

hackApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/view1/:suburb', {
                templateUrl: 'partials/view1.html',
                controller: 'LineStaticCtrl'
            }).
            when('/view2', {
                templateUrl: 'partials/view2.html'
            }).
            when('/view3', {
                templateUrl: 'partials/view3.html'
            }).
            when('/view4', {
                templateUrl: 'partials/view4.html'
            }).
            otherwise({
                redirectTo: '/view1/richmond-vic-3121'
            });
    }]);