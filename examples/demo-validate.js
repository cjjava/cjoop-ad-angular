(function(angular,$){
	'use strict';
	angular.module('demo',['cjoop.ad'])
	.controller('DemoCtrl',['$scope',function($scope){
		$("#createForm").validationEngine();
		$scope.validate = function(){
			$("#createForm").validationEngine("validate");
		};
	}]);
})(angular,jQuery);
