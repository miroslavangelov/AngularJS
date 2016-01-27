app.controller("editProfileController",
    function($scope, $location, authService, townService, notifyService) {
        $scope.towns = townService.getTowns();
        $scope.getUserProfile = function() {
            authService.getUserProfile(
                function success(data) {
                    $scope.userData = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user profile", err);
                }
            )
        };
        $scope.getUserProfile();
        $scope.editProfile = function(userData) {
            authService.editProfile(
                userData,
                function success() {
                    notifyService.showInfo("Profile edited successfully");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Cannot edit your profile", err);
                }
            )
        };
        $scope.changePassword = function(passwordData) {
            authService.changePassword(
                passwordData,
                function success() {
                    notifyService.showInfo("Password changed successfully");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Failed to change your password", err);
                }
            )
        }
});