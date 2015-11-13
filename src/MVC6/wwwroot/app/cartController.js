(function () {
    'use strict';
    var app = angular.module('cartApp');

    app.controller('cartController', ['$scope', 'cartService', cartController]);
    
    function cartController($scope, cartService) {

        $scope.cartItemName = '';
        $scope.cartItemQuantity = 0;
        $scope.searchCart = '';

        $scope.init = function() {
            $scope.cartTotal = cartService.getCartTotal();
            cartService.getCart();
        }

        $scope.cart = cartService.cartItems;
        $scope.cartTotal = cartService.cartTotal;

        $scope.addItemToCart = function () {
            cartService.addToCart($scope.cartItemName, $scope.cartItemQuantity);
            $scope.cart = cartService.cartItems;
        };

        $scope.removeItemOnCart = function (productName) {
            console.log('delete item');
            console.log('delete item: ' + productName);
            cartService.removeCartItem(productName);
            $scope.cart = cartService.cartItems;
        };

        $scope.getCartTotal = function () {
            return cartService.getCartTotal();
        }

        $scope.$watch("getCartTotal()", function (newTotal, oldTotal) {
            if (oldTotal != newTotal) {
                $scope.cartTotal = cartService.getCartTotal();
            }
        });
    };

})();
