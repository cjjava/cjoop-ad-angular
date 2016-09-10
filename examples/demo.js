(function(window,angular){
	'use strict';
	window.adhost = "127.0.0.1:80";
	angular.module('demo',['cjoop.ad'])
	.controller('DemoCtrl',['$scope',function($scope){
		$scope.a = {name:'陕西省'};
		$scope.b = {name:'延安市'};//name回显
		$scope.c = {id:'610625'};//id回显
		//清除操作,可以选择清除指定级的数据
		$scope.clean = function(){
			$scope.a.name = "";
		};
	}]);
})(window,angular);
