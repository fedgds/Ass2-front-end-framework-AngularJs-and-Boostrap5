// var apiUrl = "http://localhost:3000/categories";
app.controller("AddCategoryController", function($scope, $http){
    $scope.name = "";

    $scope.addCategory = function(){
        if (!$scope.name) {
            alert("Vui lòng điền đầy đủ thông tin");
            return;
        }else{
            $scope.addObj = {
                "name":$scope.name,  
            }
            $http.post("http://localhost:3000/categories", $scope.addObj).then((res) => {
                alert("Thêm thành công!")
                return document.location = "#!/category/list";
            })
        }
        
    }
})