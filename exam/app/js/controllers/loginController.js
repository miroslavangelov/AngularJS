app.controller("loginController",
    function($scope, $location, authService, notifyService) {
        $scope.login = function(userData) {
            authService.login(
                userData,
                function success() {
                    notifyService.showInfo("Login successful");
                    if (authService.isAdmin()) {
                        $location.path("/admin");
                    }
                    else {
                        $location.path("/");
                    }
                },
                function error(err) {
                    notifyService.showError("Login failed", err);
                }
            )
        };
});