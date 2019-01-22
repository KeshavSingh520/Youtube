var app=angular.module('Youtube')

app.controller('YoutubeController',function($scope,$rootScope,youtubeFactory){
    $scope.msg="hi"

    
    $scope.search=""

    $scope.searchInput=function(input){
        $scope.search=input;
        console.log($scope.search) 

        
        youtubeFactory.getVideosFromSearchByParams({
            q: $scope.search, // (optional) search string
            key: 'AIzaSyC099Mu0ijkmJc-LufkGYdFAlEgtKtjbH4',
            maxResults:10,
            regionCode: 'IN',
            order:'viewCount',
        })
        .then(function (success) {
            $scope.results=success.data.items;
            console.log('data',$scope.results);
            $scope.totalResults= success.data.pageInfo.resultsPerPage;
            // $scope.videoID=$scope.results.items.id.videoID;
            })
        
        .catch(function (failure) {
          alert("Something went wrong")
        });
        
    }

    var data="hi"
    $rootScope.$broadcast('sendingResults',data);


    
    

})