app.controller("userAdsController",
    function($scope, userService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };
        $scope.getUserAds = function getUserAds() {
            userService.getUserAds(
                $scope.adsParams,
                function success(data) {
                    $scope.userAds = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user ads", err);
                }
            )
        };


        $scope.deactivateAd = function(ad) {
            userService.deactivateAd(
                ad.id,
                function success() {
                    notifyService.showInfo("Ad deactivated");
                    ad.status = "Inactive";
                },
                function error(err) {
                    notifyService.showError("Cannot deactivate your ad", err);
                }
            );
        };

        $scope.publishAgainAd = function(ad) {
            userService.publishAgainAd(
                ad.id,
                function success() {
                    notifyService.showInfo("Ad published again");
                    ad.status = "WaitingApproval";
                },
                function error(err) {
                    notifyService.showError("Cannot publish again your ad", err);
                }
            );
        };
        $scope.getUserAds();
        $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.getUserAds();
        });
        $scope.$on("townSelectionChanged", function(event, selectedTownId) {
            $scope.adsParams.townId = selectedTownId;
            $scope.adsParams.startPage = 1;
            $scope.getUserAds();
        });
        $scope.$on("statusSelectionChanged", function(event, selectedStatus) {
            $scope.adsParams.status = selectedStatus;
            $scope.adsParams.startPage = 1;
            $scope.getUserAds();
        });
    });