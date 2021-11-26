(function () {
    'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Mayc";
        $scope.stateOfBeing = "fresh";

        $scope.sayMessage = function () {
            return "Every living change.."
        };

        $scope.clickme =function () {
            $scope.stateOfBeing = "rotten";
        }
    }

}) ();
