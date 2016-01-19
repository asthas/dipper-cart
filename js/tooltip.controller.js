angular.module('app')
	.controller('TooltipController', function(QuantityService) {
		var vm = this;
		vm.totalQuantity = function() {
			return QuantityService.quantity;
		}
	})
