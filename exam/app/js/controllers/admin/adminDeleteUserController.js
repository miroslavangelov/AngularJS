app.controller("adminDeleteUserController",
    function($scope, $location, notifyService, $routeParams, adminUserService, pageSize, adminAdsService) {
        $scope.adminTowns = adminAdsService.getAdminTowns();
        $scope.adminGetUserProfile = function(id) {
            adminUserService.adminGetUserProfile(
                id,
                function success(data) {
                    console.log(data)
                    $scope.adminUserData = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user profile", err);
                }
            )
        };
        $scope.adminGetUserProfile($routeParams.id);
        $scope.adminDeleteUser = function(adminUserData) {
            adminUserService.adminDeleteUser(
                adminUserData,
                function success() {
                    notifyService.showInfo("Profile deleted successfully");
                    $location.path("/admin/users");
                },
                function error(err) {
                    notifyService.showError("Cannot delete user", err);
                }
            )
        }
});