"use strict";

angular.module('Framework').directive('wwaTemperature',
    ['dataService',
        function (dataService) {
            return {
                templateUrl: 'widgets/wwaTemperature/wwaTemperatureTemplate.html',
                link: function (scope, el, attrs) {
                    scope.isLoaded = false;
                    scope.hasError = false;
                    scope.selectedLocation = null;

                    scope.loadLocation = function () {
                        scope.hasError = false;
                        dataService.getLocation(scope.item.widgetSettings.id)
                            .then(function (data) {
                                // success
                                scope.selectedLocation = data;
                                scope.isLoaded = true;
                                scope.hasError = false;
                            }, function (data) {
                                // error
                                scope.hasError = true;
                            });
                    };

                    scope.loadLocation();
                }
            };
        }]);