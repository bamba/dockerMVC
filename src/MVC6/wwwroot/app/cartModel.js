(function () {
    'use strict';

    var app = angular.module('cartApp');

    app.factory('cartModel', [cartModel]);

    function cartModel() {
        
        var getCartTotal = function () {
            var total = 0;
            for (var i = 0; i < this.cartItems.length; i++) {
                total += (this.cartItems[i].Quantity  * this.cartItems[i].Price);
            }
            return total;
        }

        var cart = {
            cartItems: [],
            getCartTotal: getCartTotal
            //addToCart: addToCart,
            //removeCartItem: removeCartItem
        };

        return cart;
    };
})();