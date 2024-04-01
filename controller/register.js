app.controller("RegisterController", function($scope, $http){
    $scope.email = "";
    $scope.password = "";

    // Hàm để kiểm tra xem email đã tồn tại trong danh sách tài khoản hay chưa
    function isEmailExists(email) {
        return $scope.accounts.some(function(account) {
            return account.email === email;
        });
    }

    // Đọc dữ liệu từ file db.json khi trang web được tải
    $http.get("db.json").then(function(response) {
        $scope.accounts = response.data.account;
    });

    $scope.register = function(){
        if (isEmailExists($scope.email)) {
            alert("Email đã tồn tại!");
            return;
        } else {
            $scope.addObj = {
                "email": $scope.email,  
                "password": $scope.password 
            }
            $http.post("http://localhost:3000/account", $scope.addObj).then((res) => {
                alert("Đăng ký thành công!")
                return document.location = "#!/login";
            })
        }
    }
});
