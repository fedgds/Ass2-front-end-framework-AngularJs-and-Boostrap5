var apiUrl = "http://localhost:3000/products";
app.controller("AddProductController", function($scope, $http){
    $scope.name = "";
    $scope.image = "";
    $scope.price = "";
    $scope.sale_price = "";
    $scope.category = "";

    $scope.addProduct = function(){
        if (!$scope.name || !$scope.image || !$scope.price || !$scope.category) {
            alert("Vui lòng điền đầy đủ thông tin");
            return;
        }else if ($scope.sale_price >= $scope.price) {
            alert("Giá sale phải nhỏ hơn giá gốc");
            return;
        }else{
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
        
    }
})