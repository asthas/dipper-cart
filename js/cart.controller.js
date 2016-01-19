angular.module('app')
	.controller('CartController', function (QuantityService) {
		var vm = this;
		vm.items = [
			{
				title: 'Lays Magic Masala',
				img: '/images/lays-magic-masala.jpg',
				options: [
					{
						label: '50gm - Rs.10',
						value: 10
					},
					{
						label: '100gm - Rs.20',
						value: 20
					}
				]
			},
			{
				title: 'Lays Classic Salter',
				img: '/images/lays-classic-salted.jpg',
				options: [
					{
						label: '50gm - Rs.10',
						value: 10
					},
					{
						label: '100gm - Rs.20',
						value: 20
					}
				]
			}
		];

		vm.choices = [
			{
				quantity: 1,
				size: {
					label: '50gm - Rs.10',
					value: 10
				}
			},
			{
				quantity: 1,
				size: {
					label: '50gm - Rs.10',
					value: 10
				}
			}
		];

		vm.updateQuantity = function() {
			var total = 0;
			vm.choices.forEach(function(choice) {
				total += choice.quantity;
			});
			QuantityService.quantity = total;
		}

		vm.getTotal = function(i) {
			vm.updateQuantity();
			var choice = vm.choices[i];
			var total = choice.quantity * choice.size.value;
			return total;
		}
	});
