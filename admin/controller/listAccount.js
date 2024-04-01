// var apiUrl = "http://localhost:3000/account";
app.controller("ListAccountController", function($scope, $http){
    $scope.listAccount = [];
    $http.get("http://localhost:3000/account").then((res) => {
        $scope.listAccount = res.data;
    })
    $scope.onClickDelete = function(id){
        if(confirm("Chắc chưa bạn?")){
            $http.delete(`${"http://localhost:3000/account"}/${id}`).then((res) => {
                if(res.status == 200){
                    alert("Ok rồi nhé!")
                }
            }, function(res){
                alert("Oh no!")
            })
        }
    }
})