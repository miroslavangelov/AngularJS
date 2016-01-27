app.controller("adminHomeController",
    function($scope, notifyService, adminAdsService, pageSize) {
        $scope.adsAdminParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };
        $scope.getAdminAds = function() {
            adminAdsService.getAdminAds(
                $scope.adsAdminParams,
                function success(data) {
                    $scope.adminAds = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            )
        };
        $scope.getAdminAds();

        $scope.$on("adminCategorySelectionChanged", function(event, selectedCategoryId) {
            $scope.adsAdminParams.categoryId = selectedCategoryId;
            $scope.adsAdminParams.startPage = 1;
            $scope.getAdminAds();
        });
        $scope.$on("adminTownSelectionChanged", function(event, selectedTownId) {
            $scope.adsAdminParams.townId = selectedTownId;
            $scope.adsAdminParams.startPage = 1;
            $scope.getAdminAds();
        });
        $scope.$on("adminStatusSelectionChanged", function(event, selectedStatus) {
            $scope.adsAdminParams.status = selectedStatus;
            $scope.adsAdminParams.startPage = 1;
            $scope.getAdminAds();
        });

        $scope.approveAd = function(ad) {
            adminAdsService.approveAd(
                ad.id,
                function success() {
                    notifyService.showInfo("Ad approved");
                    ad.status = "Published";
                },
                function error(err) {
                    notifyService.showError("Cannot approve ad", err);
                }
            )
        }

        $scope.rejectAd = function(ad) {
            adminAdsService.rejectAd(
                ad.id,
                function success() {
                    notifyService.showInfo("Ad rejected");
                    ad.status = "Rejected";
                },
                function error(err) {
                    notifyService.showError("Cannot reject ad", err);
                }
            )
        }
});