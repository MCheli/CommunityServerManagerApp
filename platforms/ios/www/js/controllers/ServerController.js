'use strict';

angular.module('app')

    .controller('ServerController', ['$scope', '$state', '$stateParams', '$rootScope', '$localStorage', function ($scope, $state, $stateParams, $rootScope, $localStorage) {

        $scope.serverInput = $localStorage.get("serverURL", "");

        $scope.setServerURL = function (serverURL) {

            $localStorage.store("serverURL", serverURL);
            $rootScope.serverURL = serverURL + "/";
            $state.go('login')

        }

    }])
