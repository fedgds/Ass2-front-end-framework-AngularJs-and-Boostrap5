// var apiUrl = "http://localhost:3000/products";
app.controller("EditProductController", function($scope, $http, $routeParams){
    $scope.productObj = [];
    $scope.id = $routeParams.id;
    $scope.listCategory = [];
    $http.get("http://localhost:3000/categories").then((res) => {
        $scope.listCategory = res.data;
    })

    $http.get(`${"http://localhost:3000/products"}/${$scope.id}`).then((res) => {
        $scope.productObj = res.data;
    })

    $scope.updateProduct = function(){
        $scope.updateParams = {
            "name": $scope.productObj.name,
            "price": $scope.productObj.price,
            "sale_price": $scope.productObj.sale_price,
            "image": $scope.productObj.image,
            "category": $scope.productObj.category
        }
        
        $http.put(`${"http://localhost:3000/products"}/${$scope.id}`, $scope.updateParams).then(() => {
            alert("Sửa thành công!");
            return document.location = "#!/product/list";
        })
        
    }
})