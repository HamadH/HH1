
var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers',
    'ngGrid'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
   // alert("hhhhhhhhhhh");
    $routeProvider.   
        when('/list', {

        templateUrl: 'partials/list.html',
        controller: 'ListController'
    }).


         when('/details/:itemId', {

             templateUrl: 'partials/details.html',
             controller: 'DetailsController'
         }).

           when('/grid', {

               templateUrl: 'http://localhost:53077/AngularJsApp/partials/GrigPage.html',
               controller: 'MyCtrl'
           }).
    otherwise({
        redirectTo:'/list'
    });

}]);





