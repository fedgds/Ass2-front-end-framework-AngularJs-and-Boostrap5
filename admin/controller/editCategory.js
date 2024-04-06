// var apiUrl = "http://localhost:3000/categories";
app.controller("EditCategoryController", function($scope, $http, $routeParams){
    $scope.categoryObj = [];
    $scope.id = $routeParams.id;


    $http.get(`${"http://localhost:3000/categories"}/${$scope.id}`).then((res) => {
        $scope.categoryObj = res.data;
    })

    $scope.updateCategory = function(){
        $scope.updateParams = {
            "name": $scope.categoryObj.name
        }
        $http.put(`${"http://localhost:3000/categories"}/${$scope.id}`, $scope.updateParams).then(() => {
            alert("Sửa thành công!");
            return document.location = "#!/category/list";
        })
    }
})