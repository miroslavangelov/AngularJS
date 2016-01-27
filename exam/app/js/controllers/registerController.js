app.controller("registerController",
    function($scope, $location, authService, townService, notifyService) {
        $scope.towns = townService.getTowns();
        $scope.register = function(userData) {
            authService.register(
                userData,
                function success() {
                    notifyService.showInfo("Register successful");
                    $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Register failed", err);
                }
            )
        };
    });