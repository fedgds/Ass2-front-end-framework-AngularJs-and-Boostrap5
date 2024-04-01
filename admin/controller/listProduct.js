// var apiUrl = "http://localhost:3000/products";
app.controller("ListProductController", function($scope, $http){
    $scope.listProduct = [];
    $http.get("http://localhost:3000/products").then((res) => {
        $scope.listProduct = res.data;
    })
    $scope.onClickDelete = function(id){
        if(confirm("Chắc chưa bạn?")){
            $http.delete(`${"http://localhost:3000/products"}/${id}`).then((res) => {
                if(res.status == 200){
                    alert("Ok rồi nhé!")
                }
            }, function(res){
                alert("Oh no!")
            })
        }
    }
})