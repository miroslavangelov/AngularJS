app.controller("homeController",
    function($scope, adsService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.getAds = function() {
            adsService.getAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            )
        };

        $scope.getAds();

        $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.getAds();
        });
        $scope.$on("townSelectionChanged", function(event, selectedTownId) {
            $scope.adsParams.townId = selectedTownId;
            $scope.adsParams.startPage = 1;
            $scope.getAds();
        });
});