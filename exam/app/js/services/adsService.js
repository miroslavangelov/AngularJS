app.factory("adsService", function($resource, baseServiceUrl) {
    var adsResource = $resource(
        baseServiceUrl + "/ads",
        null,
        {
            getAll: {method:"GET"}
        }

    );
    return {
        getAds: function(params, success, error) {
            return adsResource.getAll(params, success, error);
        }
    }
});

app.factory("categoryService", function($resource, baseServiceUrl) {
    var categoryResource = $resource(baseServiceUrl + "/categories");
    return {
        getCategories: function(success, error) {
            return categoryResource.query(success, error);
        }
    }
});

app.factory("townService", function($resource, baseServiceUrl) {
    var townResource = $resource(baseServiceUrl + "/towns");
    return {
        getTowns: function(success, error) {
            return townResource.query(success, error);
        }
    }
});