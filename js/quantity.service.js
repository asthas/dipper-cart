angular.module('app')
    .factory('QuantityService', function () {
        var service = this;
        service.quantity = 0;
        return service;
    });
