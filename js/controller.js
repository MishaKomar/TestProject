
module
	.controller("TableCtrl", TableCtrl);
	
	TableCtrl.$inject = [
		'$scope',
		'colorNameProvider'
	];

	function TableCtrl($scope, colorNameProvider) {
		$scope.init = function () {
			$scope.data = {};
			$scope.data.task = colorNameProvider.getColors();
			$scope.data.custom = colorNameProvider.getColorsCustom();
		};
	};