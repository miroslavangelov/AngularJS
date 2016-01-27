app.controller("adminUsersController", function($scope, notifyService, adminUserService, pageSize) {
    $scope.adminUserParams = {
        'startPage' : 1,
        'pageSize' : pageSize
    };
    $scope.adminGetUsers = function() {
        adminUserService.adminGetUsers(
            $scope.adminUserParams,
            function success(data) {
                //console.log(data)
                $scope.adminUsers = data;
            },
            function error(err) {
                notifyService.showError("Cannot load users", err);
            }
        );
    };
    $scope.adminGetUsers();
});