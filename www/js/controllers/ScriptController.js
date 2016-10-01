'use strict';

angular.module('app')

    .controller('ScriptController', ['$scope', '$state', '$window', '$stateParams', 'applicationFactory', 'scriptFactory', function ($scope, $state, $window, $stateParams, applicationFactory, scriptFactory) {

        $scope.application = {};

        $scope.$on('$stateChangeSuccess', function () {
            $scope.application = applicationFactory.get({
                id: $stateParams.name
            });
        });

        $scope.executeScript = function (scriptId) {
            scriptFactory.save({
                id: $stateParams.name,
                scriptId: scriptId
            }, {})
        }

    }
    ]);