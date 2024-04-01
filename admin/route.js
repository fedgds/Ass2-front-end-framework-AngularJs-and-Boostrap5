var app = angular.module('myApp', ['ngRoute'])
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "layout/dashboard.html"
    })
    .when("/product/list", {
        templateUrl : "layout/products/list.html",
        controller: 'ListProductController'
    })
    .when("/product/add", {
        templateUrl : "layout/products/add.html",
        controller: 'AddProductController'
    })
    .when("/product/edit/:id", {
        templateUrl : "layout/products/edit.html",
        controller: 'EditProductController'
    })
    .when("/category/list", {
        templateUrl : "layout/categories/list.html",
        controller: 'ListCategoryController'
    })
    .when("/category/add", {
        templateUrl : "layout/categories/add.html",
        controller: 'AddCategoryController'
    })
    .when("/category/edit/:id", {
        templateUrl : "layout/categories/edit.html",
        controller: 'EditCategoryController'
    })
    .when("/account/list", {
        templateUrl : "layout/account/list.html",
        controller: 'ListAccountController'
    })
})