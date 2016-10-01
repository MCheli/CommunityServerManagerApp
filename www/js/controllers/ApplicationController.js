'use strict';

angular.module('app')

    .controller('ApplicationController', ['$scope', '$rootScope', '$state', 'applicationFactory', 'AuthFactory', function ($scope, $rootScope, $state, applicationFactory, AuthFactory) {

        $scope.applications = applicationFactory.query();

        $scope.openApplication = function(id) {
            console.log(id);
            $state.go('')
        }

        // $scope.active = false;
        // $scope.admin = AuthFactory.getAdmin();

        // $scope.applications.$promise.then(function (data) {
        //     $scope.activeApplication = data[0].applicationName;
        //     $state.go('main.application', {name: data[0]._id})
        // });

        // $scope.setActive = function (name) {
        //     $scope.activeApplication = name;
        // }
        //
        // $scope.evalActive = function (name) {
        //     if (name == $scope.activeApplication) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
    }])