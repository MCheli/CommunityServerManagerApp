'use strict';

angular.module('app')

    .factory('applicationFactory', ['$resource', '$rootScope', 'AuthFactory', function ($resource, $rootScope, AuthFactory) {
        return $resource($rootScope.serverURL + "applications/:id", null,
            {
                'query': {
                    method: 'GET',
                    isArray: true,
                    headers: {'auth-token': AuthFactory.authToken}
                },
                'update': {
                    method: 'PUT',
                    headers: {'auth-token': AuthFactory.authToken}
                }
            });
    }])