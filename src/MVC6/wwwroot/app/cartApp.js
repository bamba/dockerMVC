(function () {
    'use strict';

    var cartApp = angular.module('cartApp', ['ngRoute']);

    cartApp.config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/editCart', {
                    templateUrl: '/app/templates/cart/cart.html',
                    controller: 'cartController'
                }).
            when('/myCart', {
                templateUrl: '/app/templates/cart/list.html',
                controller: 'cartController',
            });
        }]);

})();