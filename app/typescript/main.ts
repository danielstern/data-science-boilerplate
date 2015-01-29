/// <reference path="definition/d3.d.ts" />

declare var angular:any;
declare var d3:D3.Base;


angular.module("DemoApp",['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
    	templateUrl:'partials/main.html',
    	controller:function(){
    		console.log("What in the name of Science is going on here?");
        

    	}
	})
	.state('usage',{
		url: '/usage',
    	templateUrl:'partials/usage.html'
	})
	.state('features',{
		url: '/features',
    	templateUrl:'partials/features.html'
	})
})
