app.controller("adminCategoriesController",
    function($scope, notifyService, adminCategoryService, pageSize) {
        $scope.adminCategoryParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };
        $scope.adminGetCategories = function() {
            adminCategoryService.adminGetCategories(
                $scope.adminCategoryParams,
                function success(data) {
                   // console.log(data)
                    $scope.adminCategories = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load categories", err);
                }
            )
        };

     $scope.adminGetCategories();

});