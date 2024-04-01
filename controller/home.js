var apiUrl = "http://localhost:3000/products";
app.controller("HomeController", function($scope, $http){
    $scope.listProduct = [];
    $http.get(apiUrl).then((res) => {
        $scope.listProduct = res.data;
    })
})