'use strict';

angular.module('app')

    .controller('RegisterController', ['$scope', '$state', '$stateParams', '$rootScope', function ($scope, $state, $stateParams, $rootScope) {
        $scope.registerUsername = "";
        $scope.registerPassword = "";
        $scope.registerPasswordConfirmation = "";

        $rootScope.$on('registration:Successful', function () {
            $scope.loggedIn = AuthFactory.isAuthenticated();
            $scope.username = AuthFactory.getUsername();
            $state.go('main');
        });

        $scope.registerUser = function () {
            if ($scope.registerPassword === $scope.registerPasswordConfirmation) {
                var body = {
                    username: $scope.registerUsername,
                    password: $scope.registerPassword
                };
                AuthFactory.register(body)
            } else {
                $scope.errorMsg = "Password Don't Match"
            }
        }

    }])
