app.factory("authService", function($http, baseServiceUrl) {
    return {
        login: function(userData, success, error) {
            var request = {
                method: "POST",
                url: baseServiceUrl + "/user/login",
                data: userData
            };
            $http(request).success(function(data) {
                sessionStorage["currentUser"] = JSON.stringify(data);
                success(data);
            }).error(error);
        },
        register: function(userData, success, error) {
            var request = {
                method: "POST",
                url: baseServiceUrl + "/user/register",
                data: userData
            };
            $http(request).success(function(data) {
                sessionStorage["currentUser"] = JSON.stringify(data);
                success(data);
            }).error(error);
        },
        getCurrentUser: function() {
            var userObject = sessionStorage["currentUser"];
            if (userObject) {
                return JSON.parse(sessionStorage["currentUser"]);
            }
        },
        isLoggedIn: function() {
            return sessionStorage["currentUser"] !== undefined;
        },
        isAnonymous: function() {
            return sessionStorage["currentUser"] === undefined;
        },
        getAuthHeaders : function() {
            var headers = {};
            var currentUser = this.getCurrentUser();
            if (currentUser) {
                headers['Authorization'] = 'Bearer ' + currentUser.access_token;
            }
            return headers;
        },
        isNormalUser: function() {
            var currentUser = this.getCurrentUser();
            return (currentUser !== undefined) && (!currentUser.isAdmin);
        },
        isAdmin: function() {
            var currentUser = this.getCurrentUser();
            return (currentUser !== undefined) && (currentUser.isAdmin);
        },
        logout: function() {
            delete sessionStorage["currentUser"];
        },
        editProfile: function(userData, success, error) {
            var request = {
                method: 'PUT',
                url: baseServiceUrl + '/user/Profile',
                headers: this.getAuthHeaders(),
                data: userData
            };
            $http(request).success(success).error(error);
        },
        getUserProfile: function(success, error) {
            var request = {
                method: "GET",
                url: baseServiceUrl + "/user/profile",
                headers: this.getAuthHeaders()
            };
            $http(request).success(success).error(error);
        },
        changePassword: function(passwordData, success, error) {
            var request = {
                method: "PUT",
                url: baseServiceUrl + "/user/ChangePassword",
                headers: this.getAuthHeaders(),
                data: passwordData
            };
            $http(request).success(success).error(error);
        }
    }
});