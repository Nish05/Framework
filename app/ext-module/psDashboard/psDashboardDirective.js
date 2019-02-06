"use strict";

angular.module('psDashboard').directive('psDashboard', function () {
    return {
        templateUrl: 'ext-module/psDashboard/psDashboardTemplate.html',
        link: function (scope, element, attrs) {
            scope.addNewWidget = function (widget) {
                var newWidget = angular.copy(widget.settings);
                scope.widgets.push(newWidget);
            };
        }
    };
});