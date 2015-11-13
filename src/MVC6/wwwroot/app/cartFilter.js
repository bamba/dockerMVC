(function () {
    'use strict';

    var app = angular.module('cartApp');

    app.filter('cartFilter', function () {
        return function (cartItems, letters) {
            var filtered = [];
            for (var i = 0; i < cartItems.length; i++) {
                var item = cartItems[i];
                if (item.Product.toLowerCase().indexOf(letters) >= 0){
                    filtered.push(item);
                }
            }
            return filtered;
        };
    });
})();