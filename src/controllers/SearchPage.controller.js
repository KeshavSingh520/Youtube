var app=angular.module('Youtube');

app.controller('SearchPageController',function($scope){

    $scope.$on('sendingResults',function(event,data){
        $scope.receivedResults=data;
    })

    
   
})

