app.controller("adminRightSidebarController", function($scope, $rootScope, adminAdsService) {
    $scope.adminTowns = adminAdsService.getAdminTowns();
    $scope.adminCategories = adminAdsService.getAdminCategories();

    $scope.adminCategoryClicked = function(clickedCategoryId) {
        $scope.selectedAdminCategoryId = clickedCategoryId;
        $rootScope.$broadcast("adminCategorySelectionChanged", clickedCategoryId);
    };

    $scope.adminTownClicked = function(clickedTownId) {
        $scope.selectedAdminTownId = clickedTownId;
        $rootScope.$broadcast("adminTownSelectionChanged", clickedTownId);
    };
    $scope.adminStatusClicked = function(clickedStatus) {
        $scope.adminSelectedStatus = clickedStatus;
        $rootScope.$broadcast("adminStatusSelectionChanged", clickedStatus);
    };
});