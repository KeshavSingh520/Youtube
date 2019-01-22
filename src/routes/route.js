var app = angular.module('Youtube')




app.config(function($routeProvider){

    $routeProvider.CaseInSensitiveMatch=true;
        $routeProvider

        .when('/search',{
            templateUrl:"templates/SearchPage.html",
            controller:"SearchPageController",
           
            
        })
      
        .otherwise('/home',{
            templateUrl:"index.html",
            controller: "YoutubeController"
        })
});

