
//var artistControllers = angular.module('artistControllers', ['ngAnimate']);

//artistControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {
//    alert("hhhhhhhhhhh2");
//    $http.get('http://localhost:53077/Artist/ShowAll').success(function (data) {
//        $scope.artists = data; 
//        $scope.artistOrder = 'name';
//      //  alert(data);
//    });


//}]);


//artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
//    // alert("hhhhhhhhhhh2");
//    $http.get('http://localhost:53077/Artist/ShowAll').success(function (data) {
//        $scope.artists = data;
//        $scope.whichItem = $routeParams.itemId;
//        //  alert(data);


//        if ($routeParams.itemId > 0) {
//            $scope.prevItem = Number($routeParams.itemId) - 1;
//        } else {
//            $scope.prevItem = $scope.artists.length - 1;
//        }

//        if ($routeParams.itemId < $scope.artists.length - 1) {
//            $scope.nextItem = Number($routeParams.itemId) + 1;
//        } else {
//            $scope.nextItem = 1;
//        }

//    });


//}]);


var artistControllers = angular.module('artistControllers', ['ngAnimate']); 

 
 artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) { 
       $http.get('js/data.json').success(function(data){ 
           	$scope.artists = data; 
           	$scope.artistOrder = 'name'; 
           }); 
     }]); 
 
 
 artistControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) { 
       $http.get('js/data.json').success(function(data){ 
           	$scope.artists = data; 
           	$scope.whichItem = $routeParams.itemId; 
         
 
           	if ($routeParams.itemId > 0) { 
               		$scope.prevItem = Number($routeParams.itemId)-1; 
               	} else { 
               		$scope.prevItem = $scope.artists.length-1; 
               	} 
         
 
           	if ($routeParams.itemId < $scope.artists.length-1) { 
               		$scope.nextItem = Number($routeParams.itemId)+1; 
               	} else { 
               		$scope.nextItem = 0; 
              	} 
         
 
           }); 
     }]); 

 


artistControllers.controller('MyCtrl',['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $http.get('http://localhost:53077/Artist/ShowAll').success(function (data) {
        //   $scope.artists = data;
        alert(data);
        $scope.gridOptions = data;

        $scope.contentAvailable = true;


    });

    }]);