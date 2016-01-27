app.controller("userEditAdController",
    function($scope, $location, $routeParams, userService, categoryService, townService, notifyService) {
        $scope.categories = categoryService.getCategories();
        $scope.towns = townService.getTowns();
        $scope.adData = {};
        function getUserAd(id) {
            userService.getUserAdById(
                id,
                function success(data) {
                    $scope.adData = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load user ad", err);
                }
            );
        }
        getUserAd($routeParams.id);
        $scope.fileSelected = function fileSelected(fileInputField) {
            $scope.deleteImage();
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.adData.imageDataUrl = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };
        $scope.deleteImage = function() {
            delete $scope.adData.imageDataUrl;
            $scope.adData.changeImage = true;
        };
        $scope.editAd = function(adData) {
            userService.editAd(
                adData,
                function success() {
                    notifyService.showInfo("Ad edited successfully");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Cannot edit your ad", err);
                }
            )
        }
});