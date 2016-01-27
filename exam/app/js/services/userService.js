app.factory("userService", function($http, $resource, authService, baseServiceUrl) {
    return {
        getUserAds: function(adData, success, error) {
            var adsResource = $resource(
                baseServiceUrl + "/user/ads",
                null,
                {
                    getAll: {
                        method:"GET",
                        headers: authService.getAuthHeaders()
                    }
                }
            );
            return adsResource.getAll(adData, success, error);
        },
        publishNewAd: function(adData, success, error) {
            var request = {
                method: "POST",
                url: baseServiceUrl + "/user/ads",
                data: adData,
                headers: authService.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        deactivateAd: function(id, success, error) {
            var request = {
                method: "PUT",
                url: baseServiceUrl + "/user/ads/deactivate/" + id,
                headers: authService.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        publishAgainAd: function(id, success, error) {
            var request = {
                method: "PUT",
                url: baseServiceUrl + "/user/ads/PublishAgain/" + id,
                headers: authService.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        editAd: function(adData, success, error) {
            var request = {
                method: "PUT",
                url: baseServiceUrl + "/user/ads/" + adData.id,
                headers: authService.getAuthHeaders(),
                data: adData
            };
            $http(request).success(success).error(error);
        },
        getUserAdById: function(id, success, error) {
            var request = {
                method: 'GET',
                url: baseServiceUrl + '/user/ads/' + id,
                headers: authService.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        deleteAd: function(adData, success, error) {
            var request = {
                method: 'DELETE',
                url: baseServiceUrl + '/user/ads/' + adData.id,
                headers: authService.getAuthHeaders(),
                data: adData
            };
            $http(request).success(success).error(error);
        }
    }
});