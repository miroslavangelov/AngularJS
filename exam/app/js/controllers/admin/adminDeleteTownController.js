app.controller("adminDeleteTownController",
    function($scope, $location, $routeParams, notifyService, adminTownService) {
        $scope.adminTownData = {};
        function getTownById(id) {
            adminTownService.adminGetTownById(
                id,
                function success(data) {
                    console.log(data)
                    $scope.adminTownData = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load town", err);
                }
            )
        }
        getTownById($routeParams.id);
        $scope.adminDeleteTown = function(adminTownData) {
            adminTownService.adminDeleteTown(
                adminTownData,
                function success() {
                    notifyService.showInfo("Town deleted successfully");
                    $location.path("/admin/towns");
                },
                function error(err) {
                    notifyService.showError("Deleting town failed", err);
                }
            );

        };
    });