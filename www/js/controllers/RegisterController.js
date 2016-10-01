'use strict';

angular.module('app')

    .controller('RegisterController', ['$scope', '$state', '$stateParams', '$rootScope', 'AuthFactory', function ($scope, $state, $stateParams, $rootScope, AuthFactory) {
        $scope.registerUsername = "";
        $scope.registerPassword = "";
        $scope.registerPasswordConfirmation = "";

        $rootScope.$on('registration:Successful', function () {
            $scope.loggedIn = AuthFactory.isAuthenticated();
            $scope.username = AuthFactory.getUsername();
            $state.go('applications');
        });

        $scope.registerUser = function (username, password, confirmPassword) {
            if (password === confirmPassword) {
                var body = {
                    username: username,
                    password: password
                };
                AuthFactory.register(body)
            } else {
                $scope.errorMsg = "Password Don't Match"
            }
        }

    }])
