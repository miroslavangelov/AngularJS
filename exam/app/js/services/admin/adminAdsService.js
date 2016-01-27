app.factory("adminAdsService", function($resource, $http, authService, baseServiceUrl) {
    return {
        getAdminAds: function(adminAdData, success, error) {
            var adsResource = $resource(
                baseServiceUrl + "/admin/ads",
                null,
                {
                    getAll: {
                        method:"GET",
                        headers: authService.getAuthHeaders()
                    }
                }
            );
            return adsResource.getAll(adminAdData, success, error);
        },
        getAdminCategories: function(success, error) {
            var categoryResource = $resource(
                baseServiceUrl + "/admin/categories",
                null,
                {
                    getCategories: {
                        method: "GET",
                        headers: authService.getAuthHeaders()
                    }
                }
            );
            return categoryResource.getCategories(success, error);
        },
        getAdminTowns: function(success, error) {
            var townResource = $resource(
                baseServiceUrl + "/admin/towns",
                null,
                {
                    getTowns: {
                        method: "GET",
                        headers: authService.getAuthHeaders()
                    }
                }
            );
            return townResource.getTowns(success, error);
        },
        approveAd: function(id, success, error) {
            var request = {
                method: "PUT",
                url: baseServiceUrl + "/admin/ads/approve/" + id,
                headers: authService.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        rejectAd: function(id, success, error) {
            var request = {
                method: "PUT",
                url: baseServiceUrl + "/admin/ads/reject/" + id,
                headers: authService.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        adminEditAd: function(adminAdData, success, error) {
            var request = {
                method: "PUT",
                url: baseServiceUrl + "/admin/ads/" + adminAdData.id,
                headers: authService.getAuthHeaders(),
                data: adminAdData
            };
            $http(request).success(success).error(error);
        },
        adminGetAdById: function(id, success, error) {
            var request = {
                method: 'GET',
                url: baseServiceUrl + '/admin/ads/' + id,
                headers: authService.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        adminDeleteAd: function(adminAdData, success, error) {
            var request = {
                method: "DELETE",
                url: baseServiceUrl + "/admin/ads/" + adminAdData.id,
                headers: authService.getAuthHeaders(),
                data: adminAdData
            };
            $http(request).success(success).error(error);
        }
    }
});