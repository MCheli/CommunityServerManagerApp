'use strict';

angular.module('app')

    .factory('scriptFactory', ['$resource', 'AuthFactory', '$rootScope', function ($resource, AuthFactory, $rootScope) {
        return $resource($rootScope.serverURL + "applications/:id/scripts/:scriptId", null,
            {
                'query': {
                    method: 'GET',
                    isArray: true,
                    headers: {'auth-token': AuthFactory.authToken}
                }
            });
    }])