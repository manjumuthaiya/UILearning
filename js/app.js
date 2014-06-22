var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "pages/home.html"
    }).when('/read', {
        templateUrl: "pages/read.html"
    }).when('/about', {
        templateUrl: "pages/about.html"
    }).otherwise({
        redirectTo: '/'
    });
}]);


app.controller("MainController", function () {
   $("#topnav li").on('click', function(e) {
       $("#topnav li").removeClass("active");
       $(this).addClass("active");      //Navigation
   })
});