angular.module('app')
	.controller('TooltipController', function() {
		var vm = this;
		vm.qty1=0;
		vm.qty2=0;
		console.log(vm.qty1);
		console.log(vm.qty2);
		vm.totalQuantity = function() {
			var totalQuantity = 0;
			totalQuantity += vm.qty1 + vm.qty2;
			return totalQuantity;
		}

		console.log("Quantity is" + vm.totalQuantity());
	})
