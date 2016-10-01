'use strict';

angular.module('app')

    .factory('scriptFactory', ['$resource', 'baseURL', 'AuthFactory', function ($resource, baseURL, AuthFactory) {
        return $resource(baseURL + "applications/:id/scripts/:scriptId", null,
            {
                'query': {
                    method: 'GET',
                    isArray: true,
                    headers: {'auth-token': AuthFactory.authToken}
                }
            });
    }])