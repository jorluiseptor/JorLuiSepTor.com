(function(){
	//main app
	var app= angular.module('myApp', [		
		'myApp.controllers',
		'ngRoute'
	]); 

	//navigation
	angular.module('myApp').config(function($routeProvider,$locationProvider){
		$routeProvider.when('/bio', {
			templateUrl:'/bio.html'
		}).when('/projects', {
			templateUrl:'/projects.html'
		}).otherwise({redirectTo: '/index.html'});
	})

	// //handles the navigation
	// app.controller('NavigationController',  function($location){
	// 	this.tab=0;
		
	// 	//sets tab value based on parameter passed
	// 	this.setTab = function(activeTab) {
	// 		this.tab = activeTab;
	// 	};
		
	// 	//compares if active tab is the same as the parameter
	// 	this.isSet = function(checkTab) {
	// 		return this.tab === checkTab;
	// 	};
	// });
	
	// //load 
	// app.directive('jorluiseptorAbout', function() {
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl:'about.html'
	// 	};
	
	// }); 	
	// //load 
	// app.directive('jorluiseptorProjects', function() {
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl:'projects.html'
	// 	};
	
	// }); 
	
	
})();