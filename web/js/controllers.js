
var jorluiseptorControllers = angular.module('jorluiseptorControllers', []);


jorluiseptorControllers.controller('BioController',['$scope', 
	function($scope){
			console.log('BioController started.');
	}]);




jorluiseptorControllers.controller('ProjectsController',['$scope', 
	function($scope){
			console.log('ProjectsController started.');
	}]);





jorluiseptorControllers.controller('PhotographyController',['$scope','$http', '$routeParams', 
	function($scope, $routeParams,$http){
	

		$scope.photoID = $routeParams.photoID;
		if($scope.photoID){
			console.log('PhotographyController started. ' + $scope.photoID);
		}
		else {
			console.log('PhotographyController started.');			
		};




		var apikey = "494dd442e58fe74f85deefafa46bbfb1";
		var userIdJorge= "22796017@N03";
		var photosPerPage =500; // max is 500
		var url = "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&format=json&nojsoncallback=1&api_key="+apikey+"&user_id"+userIdJorge; 
		//var parameters = ""api_key":apikey,"user_id":userIdJorge";
		
	    //var obj = {content:null};

		$http.get(url).
		success(function(data) {
	        // you can do some processing1 here
	        $scope.photos = data;
	    });    

    	//return obj; 




		console.log($scope.photos);






	}]); //end of PhotographyController