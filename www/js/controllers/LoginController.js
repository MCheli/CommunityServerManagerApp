'use strict';

angular.module('app')
//TODO: Add back AuthFactory
    .controller('LoginController', ['$scope', '$state', '$rootScope', 'AuthFactory', function ($scope, $state, $rootScope, AuthFactory) {

        $scope.username = "";
        $scope.password = "";

        $rootScope.$on('login:Successful', function () {
            $scope.loggedIn = AuthFactory.isAuthenticated();
            $scope.username = AuthFactory.getUsername();
            $state.go('applications');
        });

        $scope.loginUser = function (username, password) {
            console.log("Whats happening")
            console.log(username)
            console.log(password)
            var body = {
                username: username,
                password: password
            };
            console.log(body)
            AuthFactory.login(body)
        };
    }]);