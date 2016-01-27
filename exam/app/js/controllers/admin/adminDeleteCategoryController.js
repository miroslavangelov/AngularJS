app.controller("adminDeleteCategoryController",
        function($scope, $location, $routeParams, notifyService, adminCategoryService) {
            $scope.adminCategoryData = {};
            function getCategoryById(id) {
                adminCategoryService.adminGetCategoryById(
                    id,
                    function success(data) {
                        $scope.adminCategoryData = data;
                    },
                    function error(err) {
                        notifyService.showError("Cannot load category", err);
                    }
                )
            }
            getCategoryById($routeParams.id);
            console.log($routeParams)
            $scope.adminDeleteCategory = function(adminCategoryData) {
                adminCategoryService.adminDeleteCategory(
                    adminCategoryData,
                    function success() {
                        notifyService.showInfo("Category deleted successfully");
                        $location.path("/admin/categories");
                    },
                    function error(err) {
                        notifyService.showError("Deleting category failed", err);
                    }
                );

            };
});