app.controller("adminTownsController", function($scope, notifyService, adminTownService, pageSize) {
    $scope.adminTownsParams = {
        'startPage' : 1,
        'pageSize' : pageSize
    };
    $scope.adminGetTowns = function() {
        adminTownService.adminGetTowns(
            $scope.adminTownsParams,
            function success(data) {
                $scope.adminTowns = data;
            },
            function error(err) {
                notifyService.showError("Cannot load towns", err);
            }
        )
    };
    $scope.adminGetTowns();
});