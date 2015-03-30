var jorluiseptorApp = angular.module('jorluiseptorApp',[
	'ngRoute',
	'jorluiseptorControllers'
	]);


jorluiseptorApp.config(['$routeProvider', function($routeProvider){

		$routeProvider.when('/bio',{
			templateUrl:'bio.html',
			controller:'BioController'
		}).when('/projects',{
			templateUrl:'projects.html',
			controller:'ProjectsController'
		}).when('/photos',{
			templateUrl:'photography.html',
			controller:'PhotographyController'
		}).otherwise({
			redirectTo:"/"
		});

}]);