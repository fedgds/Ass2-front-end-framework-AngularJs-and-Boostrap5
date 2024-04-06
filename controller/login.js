app.controller("LoginController", function($scope, $http, $location){
    // Đọc dữ liệu tài khoản từ file JSON
    $http.get('db.json').then(function(response) {
        $scope.accounts = response.data.account;
    });

    $scope.login = function() {
        // Kiểm tra thông tin đăng nhập
        var found = false;
        angular.forEach($scope.accounts, function(account) {
            if (account.email === $scope.email && account.password === $scope.password) {
                found = true;
                if(account.email ==  "admin@gmail.com"){
                    alert("Đăng nhập thành công!")
                    window.location.replace("admin/index.html");
                }else{
                    alert("Đăng nhập thành công!")
                    window.location.replace("index.html");
                }
            }
        });
        if (!found) {
            alert("Sai thông tin đăng nhập!");
        }
    };
});

