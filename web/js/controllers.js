
var jorluiseptorControllers = angular.module('jorluiseptorControllers', []);


jorluiseptorControllers.controller('BioController',['$scope', 
	function($scope){
			console.log('BioController started.');
	}]);

jorluiseptorControllers.controller('ProjectsController',['$scope', 
	function($scope){
			console.log('ProjectsController started.');
	}]);

jorluiseptorControllers.controller('PhotographyController',['$scope','$routeParams', 
	function($scope, $routeParams){
			$scope.photoID = $routeParams.photoID;
			if($scope.photoID){
				console.log('PhotographyController started. ' + $scope.photoID);
			}
			else {
				console.log('PhotographyController started.');			
			};
	}]); 