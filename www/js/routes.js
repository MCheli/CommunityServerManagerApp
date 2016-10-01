angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        $stateProvider
            .state('server', {
                url: '/landing',
                templateUrl: 'templates/server.html',
                controller: 'ServerController'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            })

            .state('register', {
                url: '/register',
                templateUrl: 'templates/register.html',
                controller: 'RegisterController'
            })

            .state('applications', {
                url: '/home',
                templateUrl: 'templates/applications.html',
                controller: 'applicationsCtrl'
            })

            .state('scripts', {
                url: '/scripts',
                templateUrl: 'templates/scripts.html',
                controller: 'scriptsCtrl'
            })

        $urlRouterProvider.otherwise('/landing')


    });