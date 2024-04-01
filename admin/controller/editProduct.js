// var apiUrl = "http://localhost:3000/products";
app.controller("EditProductController", function($scope, $http, $routeParams){
    $scope.productObj = [];
    $scope.id = $routeParams.id;

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
        if (!$scope.productObj.name || !$scope.productObj.image || !$scope.productObj.price || !$scope.productObj.category) {
            alert("Vui lòng điền đầy đủ thông tin");
            return;
        }else if ($scope.productObj.sale_price >= $scope.productObj.price) {
            alert("Giá sale phải nhỏ hơn giá gốc");
            return;
        }else{
            $http.put(`${"http://localhost:3000/products"}/${$scope.id}`, $scope.updateParams).then(() => {
                alert("Sửa thành công!");
                return document.location = "#!/product/list";
            })
        }
    }
})