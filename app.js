var nicksFlix = angular.module('nicksFlix', ['ui.router']);

nicksFlix.config(function($stateProvider, $urlRouterProvider) {
    // home page w// header and body partials
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html"
        // controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/home.html"
      }
    }
  });
// review page with header/ list and body partials
  $stateProvider.state('review', {
    url: "/review",
    views: {
      'header': {
        templateUrl: "partials/header.html"
        // controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/list.html",
        controller: "ReviewsCtrl"
      }
    }
  });
});
