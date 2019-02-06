"use strict";

angular.module('Framework').directive('wwaTemperature',
    ['dataService',
        function(dataService){
            return {
                templateUrl: 'widgets/wwaTemperature/wwaTemperatureTemplate.html',
                link: function(scope, el, attrs){
                    dataService.getEmployee(scope.item.widgetSettings.id)
                        .then(function(data){
                            scope.selectedEmployee = data;
                        });
                }
            };
        }]);