angular.module('app', [])
	.controller('CartController', function () {
		var vm = this;
		vm.qty = 1;
		vm.value = parseInt(vm.value);
		vm.total = function() {
			var total = 0;
			total += vm.qty * vm.value;
			return total;
		}
	})