app.controller("videoController", function($scope, $rootScope, $location, videoService, categoryService) {
    $scope.videos = videoService.getVideos();
    $scope.filters = {};
    $scope.getVideos = function() {
        return videoService.getVideos();
    };
    $scope.videoData = {};
    $scope.addVideo = function(videoData) {
        if (videoData.title !== undefined && videoData.pictureUrl !== undefined
            && videoData.category !== undefined) {
            $scope.videos = videoService.addVideo(videoData);
            $location.path("/");
        }
        else {
            console.log("Please fill all fields");
        }

    };
    $scope.fileSelected = function fileSelected(fileInputField) {
        delete $scope.videoData.pictureUrl;
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function() {
                $scope.videoData.pictureUrl = reader.result;
                $(".image-box").html("<img src='" + reader.result + "'>");
            };
            reader.readAsDataURL(file);
        } else {
            $(".image-box").html("<p>File type not supported!</p>");
        }
    };
    $scope.categories = categoryService.getCategories();

    $scope.$on("categorySelectionChanged", function(event, selectedCategoryName) {
        $scope.filters.category = selectedCategoryName;
        $scope.getVideos();
    });
    $scope.categoryClicked = function(clickedCategoryName) {
        if (clickedCategoryName === '') {
            $scope.selectedCategoryName = null;
        }
        else {
            $scope.selectedCategoryName = clickedCategoryName;
        }
        $rootScope.$broadcast("categorySelectionChanged", clickedCategoryName);
    };

    $scope.$on("subtitlesSelectionChanged", function(event, selectedSubtitles) {
        $scope.filters.haveSubtitles = selectedSubtitles;
        $scope.getVideos();
    });
    $scope.subtitleClicked = function(clickedSubtitles) {
        if(clickedSubtitles === '') {
            $scope.selectedSubtitles = null;
        }
        else {
            $scope.selectedSubtitles = clickedSubtitles;
        }
        $rootScope.$broadcast("subtitlesSelectionChanged", clickedSubtitles);
    };

    $scope.$on("orderByTitle", function(event, order) {
        $scope.orders = order;
        $scope.getVideos();
    });
    $scope.orderByTitle = function(order) {
        $scope.selectedOrder = order;
        $rootScope.$broadcast("orderByTitle", order);
    };

    $scope.$on("orderByLength", function(event, order) {
        $scope.orders = order;
        $scope.getVideos();
    });
    $scope.orderByLength = function(order) {
        $scope.selectedOrder = order;
        $rootScope.$broadcast("orderByLength", order);
    };

    $scope.$on("orderByLikes", function(event, order) {
        $scope.orders = order;
        $scope.getVideos();
    });
    $scope.orderByLikes = function(order) {
        $scope.selectedOrder = order;
        $rootScope.$broadcast("orderByLikes", order);
    };

    $scope.$on("orderByDate", function(event, order) {
        $scope.orders = order;
        $scope.getVideos();
    });
    $scope.orderByDate = function(order) {
        $scope.selectedOrder = order;
        $rootScope.$broadcast("orderByDate", order);
    };
});