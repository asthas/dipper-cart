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
				added: false,
				quantity: 1,
				size: {
					label: '50gm - Rs.10',
					value: 10
				}
			},
			{
				added: false,
				quantity: 1,
				size: {
					label: '50gm - Rs.10',
					value: 10
				}
			}
		];

		vm.updateQuantity = function(i) {
			var total = 0;

			//Set field added of the selected item to true
			vm.choices[i].added = true;

			//Add all quantities of item who have been selected
			vm.choices.forEach(function(choice) {
				if (choice.added === true) {
					total += choice.quantity;
				}
			});
			QuantityService.quantity = total;
		}

		vm.getTotal = function(i) {
			var choice = vm.choices[i];
			var total = choice.quantity * choice.size.value;
			return total;
		}
	});
