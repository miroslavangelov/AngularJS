app.controller("adminDeleteAdController",
    function($scope, $location, $routeParams, notifyService, adminAdsService) {
        $scope.adminAdData = {};
        function adminGetUserAd(id) {
            adminAdsService.adminGetAdById(
                id,
                function success(data) {
                    $scope.adminAdData = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load admin ad", err);
                }
            )
        }
        adminGetUserAd($routeParams.id);
        $scope.adminDeleteAd = function(adminAdData) {
            adminAdsService.adminDeleteAd(
                adminAdData,
                function success() {
                    notifyService.showInfo("Ad deleted successfully");
                    $location.path("/admin/ads");
                },
                function error(err) {
                    notifyService.showError("Cannot delete ad", err);
                }
            )
        }
});