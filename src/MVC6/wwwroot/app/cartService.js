(function () {
    var app = angular.module('cartApp');

    app.factory('cartService', ['$http', 'cartModel', cartService]);

    function cartService($http, cartModel) {
        var service = {};
        service.cartItems = cartModel.cartItems;

        function populateModel(data) {
            angular.merge(cartModel.cartItems, data);
            //cartModel.cartItems = data;
        };

        service.getCartTotal = function() {
           return cartModel.getCartTotal();
        }

        service.getCart = function() {
            $http({
                method: 'GET',
                url: '/home/get'
            }).success(function (response) {
                populateModel(response);
            });
        }

        service.addToCart = function (productName, quantity) {
            var item = {};
            item.Product = productName;
            item.Quantity = quantity;
            item.Price = ((Math.random() * 500 + 5).toFixed(2));

            //$http({
            //    method: 'POST',
            //    url: '/home/Add',
            //    data: JSON.stringify(item)
            //}).success(function (response) {
            //    populateModel(response);
            //});

            $http.post('/home/Add?Product='+productName+'&Quantity=' + quantity +'&Price='+ ((Math.random() * 500 + 5).toFixed(2)));
        }

        service.removeCartItem = function (productName) {
            var item = {};
            item.Product = productName;
            item.Quantity = 0;

            $http({
                method: 'POST',
                url: '/home/Remove?Product='+productName,
                data: item
            }).success(function () {
                for (var i = 0; i < cartModel.cartItems.length; i++) {
                    if (cartModel.cartItems[i].Product === productName) {
                        cartModel.cartItems.splice(i, 1);
                        break;
                    }
                }
            });
        }

        return service;
    };
})();