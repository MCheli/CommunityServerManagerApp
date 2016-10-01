'use strict';

angular.module('app')
//TODO: Add back AuthFactory
    .controller('LoginController', ['$scope', '$state', '$rootScope', 'AuthFactory', function ($scope, $state, $rootScope, AuthFactory) {


        $scope.loginUsername = "";
        $scope.loginPassword = "";

        $rootScope.$on('login:Successful', function () {
            $scope.loggedIn = AuthFactory.isAuthenticated();
            $scope.username = AuthFactory.getUsername();
            $state.go('applications');
        });


        $scope.loginUser = function () {
            if ($scope.loginUsername && $scope.loginPassword) {
                var body = {
                    username: $scope.loginUsername,
                    password: $scope.loginPassword
                };
                AuthFactory.login(body)
            }
        };
    }]);