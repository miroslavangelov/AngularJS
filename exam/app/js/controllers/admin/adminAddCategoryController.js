app.controller("adminAddCategoryController", function($scope, $location, notifyService, adminCategoryService) {
    $scope.adminAddCategory = function(adminCategoryData) {
        adminCategoryService.adminAddCategory(
            adminCategoryData,
            function success() {
                notifyService.showInfo("Category added successfully");
                $location.path("/admin/categories");
            },
            function error(err) {
                notifyService.showError("Adding category failed", err);
            }
        )
    }
});