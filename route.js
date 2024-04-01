var app = angular.module('myApp', ['ngRoute'])
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "layout/home.html",
        controller: 'HomeController'
    })
    .when("/detail:id", {
        templateUrl : "layout/detail.html",
        controller: 'DetailController'
    })
    .when("/about", {
        templateUrl : "layout/about.html"
    })
    .when("/blog", {
        templateUrl : "layout/blog.html"
    })
    .when("/feature", {
        templateUrl : "layout/feature.html"
    })
    .when("/contact", {
        templateUrl : "layout/contact.html"
    })
    .when("/login", {
        templateUrl : "layout/login.html",
        controller: 'LoginController'
    })
    .when("/register", {
        templateUrl : "layout/register.html",
        controller: 'RegisterController'
    })
})
