app.controller("userPublishNewAdController",
    function($scope, $location, userService, categoryService, townService, notifyService) {
        $scope.categories = categoryService.getCategories();
        $scope.towns = townService.getTowns();
        $scope.adData = {townId: null, categoryId: null};

        $scope.fileSelected = function fileSelected(fileInputField) {
            delete $scope.adData.imageDataUrl;
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

        $scope.publishNewAd = function(adData) {
            userService.publishNewAd(
                adData,
                function success() {
                    notifyService.showInfo("Ad published successfully");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Publishing ad failed", err);
                }
            )
        }
});