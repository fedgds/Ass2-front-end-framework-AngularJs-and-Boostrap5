// var apiUrl = "http://localhost:3000/categories";
app.controller("ListCategoryController", function($scope, $http){
    $scope.listCategory = [];
    $scope.products = [];

    // Lấy danh sách danh mục
    $http.get("http://localhost:3000/categories").then((res) => {
        $scope.listCategory = res.data;
        // Lấy danh sách sản phẩm sau khi đã có danh sách danh mục
        $http.get("http://localhost:3000/products").then((resProducts) => {
            $scope.products = resProducts.data;
            // Đánh dấu các danh mục có sản phẩm
            $scope.listCategory.forEach(function(category) {
                category.hasProducts = $scope.products.some(function(product) {
                    return product.category === category.name;
                });
            });
        });
    });

    $scope.onClickDelete = function(id){
        if(confirm("Chắc chưa bạn?")){
            $http.delete(`${"http://localhost:3000/categories"}/${id}`).then((res) => {
                if(res.status == 200){
                    alert("Ok rồi nhé!")
                }
            }, function(res){
                alert("Oh no!")
            })
        }
    }
})