### cjoop-ad-angularjs
![Bower version](https://img.shields.io/bower/v/cjoop-ad-angular.svg)
# Installation

```sh
$ bower install cjoop-ad-angular
```

# usage
引入js依赖:
```javascript
<!--可选,如果引入该文件,前三级数据不会访问后台服务-->
<script type="text/javascript" src="../dist/angular-ad-data.min.js" ></script>
<script type="text/javascript" src="../dist/angular-ad.min.js" ></script>
```
html使用方式,通过bind-model属性配置多级选择,代码片段:
```html
  三级地址:{{province.name}} {{city.name}} {{county.name}}
  <ad bind-model="province,city,county"></ad>
  <br/>
  五级地址:{{province.name}} {{city.name}} {{county.id}} {{town.name}} {{village.name}}
  <ad bind-model="province,city,county,town,village"></ad>
  <br/>
  独立作用域:{{p.name}} {{ci.name}} {{co.name}} {{t.name}} {{v.name}}
  <ad bind-model="p,ci,co,t,v"></ad>
  <br/>
  回显地址:<ad bind-model="a,b,c"></ad>
  <br/>
  <a class="btn btn-default" ng-click="clean()">清除内容</a>
```
angular初始化模块引入：
```javascript
angular.module('demo',['cjoop.ad'])
	.controller('DemoCtrl',['$scope',function($scope){
		$scope.a = {name:'陕西省',$$index:0};
		$scope.b = {name:'延安市',$$index:1};//name回显
		$scope.c = {id:'610625',$$index:2};//id回显
    //清除操作,可以选择清除指定级的数据
		$scope.clean = function(){
			$scope.a.name = '';
		};
	}]);
```
完整的代码在examples目录。

