app.controller("adminEditAdController",
    function($scope, $location, $routeParams, notifyService, adminAdsService) {
        $scope.adminTowns = adminAdsService.getAdminTowns();
        $scope.adminCategories = adminAdsService.getAdminCategories();
        $scope.adminAdData = {};
        function adminGetUserAd(id) {
            adminAdsService.adminGetAdById(
                id,
                function success(data) {
                    console.log(data)
                    $scope.adminAdData = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load admin ad", err);
                }
            )
        }
        adminGetUserAd($routeParams.id);

        $scope.fileSelected = function fileSelected(fileInputField) {
            $scope.deleteImage();
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.adminAdData.imageDataUrl = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };
        $scope.deleteImage = function() {
            delete $scope.adminAdData.imageDataUrl;
            $scope.adminAdData.changeImage = true;
        };
        $scope.adminEditAd = function(adminAdData) {
            adminAdsService.adminEditAd(
                adminAdData,
                function success() {
                    notifyService.showInfo("Ad edited successfully");
                    $location.path("/admin/ads");
                },
                function error(err) {
                    notifyService.showError("Cannot edit ad", err);
                }
            )
        }
});