'use strict';

/* Services */

var hackServices = angular.module('hackServices', []);

hackServices.factory('LineChart',
    function () {
        var service = {};
        service.line = function (data) {
            $('#container').highcharts({
                chart: {
                    type: 'line'
                },
                title: {
                    text: data.suburb + ' Listing Upgrades Changing History'
                },
                xAxis: {
                    categories:data.Time
                },
                yAxis: {
                    title: {
                        text: 'Price$'
                    }
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: true
                        },
                        enableMouseTracking: true
                    }
                },
                series: [
                    {
                        name: 'Feature',
                        data: data.Feature
                    },
                    {
                        name: 'Highlight',
                        data: data.Highlight
                    },
                    {
                        name: 'Premiere',
                        data: data.Premiere
                    }
                ]
            });
        }
        return service;
    });


