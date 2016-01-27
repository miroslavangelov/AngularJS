app.controller("userDeleteAdController",
    function($scope, $location, $routeParams, userService, notifyService) {
        $scope.adData = {};
        function getUserAd(id) {
            userService.getUserAdById(
                id,
                function success(data) {
                    $scope.adData = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user ad", err);
                }
            );
        }
        getUserAd($routeParams.id);

        $scope.deleteAd = function(adData) {
            userService.deleteAd(
                adData,
                function success() {
                    notifyService.showInfo("Ad deleted successfully");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Cannot delete your ad", err);
                }
            )
        }
    });