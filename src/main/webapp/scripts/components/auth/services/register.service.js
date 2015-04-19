'use strict';

angular.module('makeupApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


