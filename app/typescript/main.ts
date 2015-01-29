/// <reference path="definition/d3.d.ts" />

declare var angular:any;

angular.module("DemoApp",['ui.router'])
.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
    	templateUrl:'partials/main.html'
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