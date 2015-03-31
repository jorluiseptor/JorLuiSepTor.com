

var jorluiseptorServices = angular.module('jorluiseptorServices', ['ngResource']);

jorluiseptorServices.factory('Photos', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);