"use strict";

angular.module('psMenu').controller('psMenuController',
    ['$scope', '$rootScope', function($scope, $rootScope){

        $scope.showMenu = true;
        $scope.isVertical = true;
        $scope.openMenuScope = null;
        $scope.allowHorizontalToggle = true;

        this.getActiveElement = function(){
            return $scope.activeElement;
        };
        this.setActiveElement = function(el){
            $scope.activeElement = el;
        };
        this.isVertical = function(){
            return $scope.isVertical;
        };
        this.setRoute = function(route){
            $rootScope.$broadcast('ps-menu-item-selected-event',
                {route: route});
        };
        this.setOpenMenuScope = function(scope){
          $scope.openMenuScope = scope;
        };

        $scope.toggleMenuOrientation = function(){
            $scope.isVertical = !$scope.isVertical;

            $rootScope.$broadcast('ps-menu-orien tation-changed-event',{
               isMenuVertical: $scope.isVertical
            });
        };
        $scope.$on('ps-menu-show', function(evt, data){
            $scope.showMenu = data.show;
            $scope.isVertical = data.isVertical;
            $scope.allowHorizontalToggle = data.allowHorizontalToggle;
        });

        angular.element(document).bind('click', function(e){
            if($scope.openMenuScope && !$scope.isVertical){
                if($(e.target).parent().hasClass('ps-selectable-item'))
                    return;
                $scope.$apply(function(){
                    $scope.openMenuScope.closeMenu();
                });
                e.preventDefault();
                e.stopPropagation();
            }
        });
    }]
);