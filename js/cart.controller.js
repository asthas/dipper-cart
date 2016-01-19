angular.module('app')
	.controller('CartController', function () {
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

		vm.getTotal = function(i) {
			var choice = vm.choices[i];
			var total = choice.quantity * choice.size.value;
			return total;
		}

		vm.total = function() {
			var total = 0;
			total += vm.qty * vm.value;
			return total;
		}
	});
