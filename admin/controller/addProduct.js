var apiUrl = "http://localhost:3000/products";
app.controller("AddProductController", function($scope, $http){
    $scope.name = "";
    $scope.image = "";
    $scope.price = "";
    $scope.sale_price = "";
    $scope.category = "";
    $scope.listCategory = [];
    $http.get("http://localhost:3000/categories").then((res) => {
        $scope.listCategory = res.data;
    })

    $scope.addProduct = function(){
        $scope.addObj = {
            "name":$scope.name,  
            "image":$scope.image,  
            "price":$scope.price, 
            "sale_price": $scope.sale_price,
            "category":$scope.category
        }
        $http.post("http://localhost:3000/products", $scope.addObj).then((res) => {
            alert("Thêm thành công!")
            return document.location = "#!/product/list";
        })
        
    }
})