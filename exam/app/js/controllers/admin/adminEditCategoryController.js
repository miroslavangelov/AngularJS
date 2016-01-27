app.controller("adminEditCategoryController",
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
        $scope.adminEditCategory = function(adminCategoryData) {
            adminCategoryService.adminEditCategory(
                adminCategoryData,
                function success() {
                    notifyService.showInfo("Category edited successfully");
                    $location.path("/admin/categories");
                },
                function error(err) {
                    notifyService.showError("Editing category failed", err);
                }
            );

        };
    });