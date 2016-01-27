app.factory("adminUserService", function($resource, $http, authService, baseServiceUrl) {
    return {
        adminGetUsers: function(adminUserData, success, error) {
            var usersResource = $resource(
                baseServiceUrl + "/admin/users",
                null,
                {
                    getAll: {
                        method:"GET",
                        headers: authService.getAuthHeaders()
                    }
                }
            );
            return usersResource.getAll(adminUserData, success, error);
        },
        adminEditUser: function(adminUserData, success, error) {
            var request = {
                method: "PUT",
                url: baseServiceUrl + "/admin/user/" + adminUserData.userName,
                headers: authService.getAuthHeaders(),
                data: adminUserData
            };
            $http(request).success(success).error(error);
        },
        adminGetUserProfile: function(id, success, error) {
            var request = {
                method: "GET",
                url: baseServiceUrl + "/admin/users/" + id,
                headers: authService.getAuthHeaders(),
            };
            $http(request).success(success).error(error);
        },
        adminChangePassword: function(adminPasswordData, success, error) {
            var request = {
                method: "PUT",
                url: baseServiceUrl + "/admin/SetPassword",
                headers: authService.getAuthHeaders(),
                data: adminPasswordData
            };
            $http(request).success(success).error(error);
        },
        adminDeleteUser: function(adminUserData, success, error) {
            var request = {
                method: "DELETE",
                url: baseServiceUrl + "/admin/user/" + adminUserData.userName,
                headers: authService.getAuthHeaders(),
                data: adminUserData
            };
            $http(request).success(success).error(error);
        }
    }
});