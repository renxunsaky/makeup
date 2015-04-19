'use strict';

angular.module('makeupApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
