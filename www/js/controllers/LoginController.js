'use strict';

angular.module('app')
    .controller('LoginController', ['$scope', '$state', '$rootScope', 'AuthFactory', '$localStorage', function ($scope, $state, $rootScope, AuthFactory, $localStorage) {

        $scope.username = $localStorage.get("username", "");
        $scope.password = "";

        $rootScope.$on('login:Successful', function () {
            $scope.loggedIn = AuthFactory.isAuthenticated();
            $scope.username = AuthFactory.getUsername();
            $state.go('applications');
        });

        $scope.loginUser = function (username, password) {

            $localStorage.store("username", username);

            var body = {
                username: username,
                password: password
            };
            AuthFactory.login(body)
        };
    }]);