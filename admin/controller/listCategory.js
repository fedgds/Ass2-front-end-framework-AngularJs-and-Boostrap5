// var apiUrl = "http://localhost:3000/categories";
app.controller("ListCategoryController", function($scope, $http){
    $scope.listCategory = [];
    $http.get("http://localhost:3000/categories").then((res) => {
        $scope.listCategory = res.data;
    })
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