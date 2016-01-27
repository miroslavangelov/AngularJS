app.controller("rightSidebarController",
    function($scope, $rootScope, categoryService, townService) {
        $scope.categories = categoryService.getCategories();
        $scope.towns = townService.getTowns();

        $scope.categoryClicked = function(clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
        };

        $scope.townClicked = function(clickedTownId) {
            $scope.selectedTownId = clickedTownId;
            $rootScope.$broadcast("townSelectionChanged", clickedTownId);
        };

        $scope.statusClicked = function(clickedStatus) {
            $scope.selectedStatus = clickedStatus;
            $rootScope.$broadcast("statusSelectionChanged", clickedStatus);
        };
});