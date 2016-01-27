app.controller("adminAddTownController", function($scope, $location, notifyService, adminTownService) {
    $scope.adminAddTown = function(adminTownData) {
        adminTownService.adminAddTown(
            adminTownData,
            function success() {
                notifyService.showInfo("Town added successfully");
                $location.path("/admin/towns");
            },
            function error(err) {
                notifyService.showError("Adding town failed", err);
            }
        );
    };
});