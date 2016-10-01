'use strict';

angular.module('app.controllers', [])

    .controller('ServerController', ['$scope', '$state', '$stateParams', '$rootScope', function ($scope, $state, $stateParams, $rootScope) {

        $rootScope.serverURL = {};

        $scope.setServerURL = function (serverURL) {
            console.log(serverURL);
            $rootScope.serverURL = serverURL;
            $state.go('login')
        }

    }])
