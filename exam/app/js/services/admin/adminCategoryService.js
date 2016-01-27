app.service("adminCategoryService", function($resource, $http, authService, baseServiceUrl) {
    return {
        adminGetCategories: function(adminCategoryData, success, error) {
            var categoryResource = $resource(
                baseServiceUrl + "/admin/categories",
                null,
                {
                    getAll: {
                        method:"GET",
                        headers: authService.getAuthHeaders()
                    }
                }
            );
            return categoryResource.getAll(adminCategoryData, success, error);
        },
        adminAddCategory: function(adminCategoryData, success, error) {
            var request = {
                method: "POST",
                url: baseServiceUrl + "/admin/categories",
                headers: authService.getAuthHeaders(),
                data: adminCategoryData
            };
            $http(request).success(success).error(error);
        },
        adminEditCategory: function(adminCategoryData, success, error) {
            var request = {
                method: "PUT",
                url: baseServiceUrl + "/admin/categories/" + adminCategoryData.id,
                headers: authService.getAuthHeaders(),
                data: adminCategoryData
            };
            $http(request).success(success).error(error);
        },
        adminGetCategoryById: function(id, success, error) {
            var request = {
                method: "GET",
                url: baseServiceUrl + "/categories/" + id,
                headers: authService.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        adminDeleteCategory: function(adminCategoryData, success, error){
            var request = {
                method: "DELETE",
                url: baseServiceUrl + "/admin/categories/" + adminCategoryData.id,
                headers: authService.getAuthHeaders(),
                data: adminCategoryData
            };
            $http(request).success(success).error(error);
        }
    }
});