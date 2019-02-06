"use strict";

angular.module('Framework').directive('wwaTemperature',
    ['dataService',
        function(dataService){
            return {
                templateUrl: 'widgets/wwaTemperature/wwaTemperatureTemplate.html',
                link: function(scope, el, attrs){
                    dataService.getLocation(scope.item.widgetSettings.id)
                        .then(function(data){
                            scope.selectedLocation = data;
                        });
                }
            };
        }]);