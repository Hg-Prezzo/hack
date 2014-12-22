'use strict';

/* Services */

var hackServices = angular.module('hackServices', []);


hackServices.factory('LineChart',
    function () {
        var service = {};
        service.line = function(data) {
            $('#container').highcharts({
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Monthly Average Temperature'
                },
                subtitle: {
                    text: 'Source: WorldClimate.com'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: false
                    }
                },
                series: [
                    {
                        name: 'Tokyo',
                        data: data.Tokyo
                    },
                    {
                        name: 'London',
                        data: data.London
                    }
                ]
            });
        }
        return service;
});
