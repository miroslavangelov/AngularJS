app.factory("adminTownService", function($resource, $http, authService, baseServiceUrl) {
    return {
        adminGetTowns: function(adminTownData, success, error) {
            var townResource = $resource(
                baseServiceUrl + "/admin/towns",
                null,
                {
                    getAll: {
                        method:"GET",
                        headers: authService.getAuthHeaders()
                    }
                }
            );
            return townResource.getAll(adminTownData, success, error);
        },
        adminAddTown: function(adminTownData, success, error) {
            var request = {
                method: "POST",
                url: baseServiceUrl + "/admin/towns",
                headers: authService.getAuthHeaders(),
                data: adminTownData
            };
            $http(request).success(success).error(error);
        },
        adminGetTownById: function(id, success, error) {
            var request = {
                method: "GET",
                url: baseServiceUrl + "/towns/" + id,
                headers: authService.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        adminEditTown: function(adminTownData, success, error) {
            var request = {
                method: "PUT",
                url: baseServiceUrl + "/admin/towns/" + adminTownData.id,
                headers: authService.getAuthHeaders(),
                data: adminTownData
            };
            $http(request).success(success).error(error);
        },
        adminDeleteTown: function(adminTownData, success, error){
            var request = {
                method: "DELETE",
                url: baseServiceUrl + "/admin/towns/" + adminTownData.id,
                headers: authService.getAuthHeaders(),
                data: adminTownData
            };
            $http(request).success(success).error(error);
        }
    }
});