"use strict";

angular.module('psMenu').directive('psMenu', ['$timeout', function($timeout){
   return {
       restrict: 'AE',
       transclude: true,
       templateUrl: 'ext-module/psMenu/psMenuTemplate.html',
       controller: 'psMenuController',
       link: function(scope, el, attr){
            var item = el.find('.ps-selectable-item:first');
            $timeout(function(){
                item.trigger('click');
            });
       }
   };
}]);