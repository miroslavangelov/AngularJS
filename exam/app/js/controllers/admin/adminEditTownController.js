app.controller("adminEditTownController",
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
        $scope.adminEditTown = function(adminTownData) {
            adminTownService.adminEditTown(
                adminTownData,
                function success() {
                    notifyService.showInfo("Town edited successfully");
                    $location.path("/admin/towns");
                },
                function error(err) {
                    notifyService.showError("Editing town failed", err);
                }
            );

        };
    });