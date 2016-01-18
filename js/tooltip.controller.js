angular.module('app')
	.controller('toolCtrl', function() {
		var vm = this;
		vm.qty1 = 0;
		vm.qty2 = 0;
		console.log(vm.qty1);
		console.log(vm.qty2);
		vm.Totalqty = vm.qty1 + vm.qty2;
		console.log("Quantity is" + vm.Totalqty);
	})
