'use strict';
//bio controller
angular.module('myApp.controllers', [])
	// .controller('BioController',
	// 	function($scope){
	// 		$scope.section = 'bio';
	// })
	// .controller('ProjectsController',
	// 	function($scope){
	// 		$scope.section = 'projects';
	// })
	.controller('NavigationController', 
		function($scope, $location){
			//return true of false if the tab equals the address
			$scope.isActive = function (viewLocation) { 
		        return viewLocation === $location.path();
		    };
	});

