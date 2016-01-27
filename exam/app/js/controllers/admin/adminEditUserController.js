app.controller("adminEditUserController",
    function($scope, $location, notifyService, $routeParams, adminUserService, pageSize, adminAdsService) {
        $scope.adminTowns = adminAdsService.getAdminTowns();
        $scope.adminGetUserProfile = function(id) {
            adminUserService.adminGetUserProfile(
                id,
                function success(data) {
                   // console.log(data)
                    $scope.adminUserData = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user profile", err);
                }
            )
        };
        $scope.adminGetUserProfile($routeParams.id);

        $scope.adminEditUser = function(adminUserData) {
            adminUserService.adminEditUser(
                adminUserData,
                function success() {
                    notifyService.showInfo("Profile edited successfully");
                    $location.path("/admin/users");
                },
                function error(err) {
                    notifyService.showError("Cannot edit user profile", err);
                }
            )
        };
        $scope.adminChangePassword = function(adminPasswordData) {
            adminUserService.adminChangePassword(
                adminPasswordData,
                function success() {
                    notifyService.showInfo("Password changed successfully");
                    $location.path("/admin/users");
                },
                function error(err) {
                    notifyService.showError("Failed to change password", err);
                }
            )
        }

});