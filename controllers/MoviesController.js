movies.controller("MoviesCtrl", function MoviesCtrl($scope, ReviewsFactory) {
    $scope.reviews = ReviewsFactory.reviews;
    $scope.ReviewsFactory = ReviewsFactory;


})


// this must be needed?! 
