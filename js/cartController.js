angular.module('app')
	.controller('CartController', function () {
		var vm = this;

		vm.qty = 1;
		vm.cost = 10;
		vm.total = function() {
			var total = 0;
			total += vm.qty * vm.cost;

			return total;
		}
	})