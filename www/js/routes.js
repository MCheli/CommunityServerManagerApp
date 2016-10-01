angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('server', {
    url: '/landing',
    templateUrl: 'templates/server.html',
    controller: 'serverCtrl'
  })

  .state('login', {
    url: '/page9',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/register',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
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