var detailUrl = "http://localhost:3000/products";
app.controller("DetailController", function($scope, $http, $routeParams){
    $scope.productObj = [];
    $scope.relatedProducts = [];
    $scope.id = $routeParams.id;

    $http.get(`${detailUrl}/${$scope.id}`).then((res) => {
        $scope.productObj = res.data;

        const category = $scope.productObj.category;

        // Lấy danh sách sản phẩm cùng danh mục 
        $http.get(detailUrl).then((res) => {
            const allProducts = res.data;
            $scope.relatedProducts = allProducts.filter(product => product.category === category && product.id !== $scope.id);
        });
    })
    $scope.comments = [];
    $scope.newComment = { author: "Alex Sang", date: "", content: "" };

    $scope.comment = function() {
        $scope.newComment.date = new Date().toLocaleString();
        $scope.comments.push(angular.copy($scope.newComment));
        $scope.newComment.content = "";
    };
})