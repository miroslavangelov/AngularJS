'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);
app.constant("baseServiceUrl", "http://softuni-ads.azurewebsites.net/api");
app.constant("pageSize", 5);
app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'loginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'registerController'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/user-ads.html',
        controller: 'userAdsController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-ad.html',
        controller: 'userPublishNewAdController'
    });

    $routeProvider.when('/user/ads/edit/:id', {
        templateUrl: 'templates/user/edit-ad.html',
        controller: 'userEditAdController'
    });

    $routeProvider.when('/user/ads/delete/:id', {
        templateUrl: 'templates/user/delete-ad.html',
        controller: 'userDeleteAdController'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/edit-profile.html',
        controller: 'editProfileController'
    });

    $routeProvider.when('/admin/ads', {
        templateUrl: 'templates/admin/adminHome.html',
        controller: 'adminHomeController'
    });

    $routeProvider.when('/admin/ads/edit/:id', {
        templateUrl: 'templates/admin/admin-edit-ad.html',
        controller: 'adminEditAdController'
    });

    $routeProvider.when('/admin/ads/delete/:id', {
        templateUrl: 'templates/admin/admin-delete-ad.html',
        controller: 'adminDeleteAdController'
    });

    $routeProvider.when('/admin/users', {
        templateUrl: 'templates/admin/admin-users.html',
        controller: 'adminUsersController'
    });

    $routeProvider.when('/admin/users/edit/:id', {
        templateUrl: 'templates/admin/admin-edit-user.html',
        controller: 'adminEditUserController'
    });

    $routeProvider.when('/admin/users/delete/:id', {
        templateUrl: 'templates/admin/admin-delete-user.html',
        controller: 'adminDeleteUserController'
    });

    $routeProvider.when('/admin/categories', {
        templateUrl: 'templates/admin/admin-categories.html',
        controller: 'adminCategoriesController'
    });
    $routeProvider.when('/admin/categories/add', {
        templateUrl: 'templates/admin/admin-add-category.html',
        controller: 'adminAddCategoryController'
    });

    $routeProvider.when('/admin/categories/edit/:id', {
        templateUrl: 'templates/admin/admin-edit-category.html',
        controller: 'adminEditCategoryController'
    });

    $routeProvider.when('/admin/categories/delete/:id', {
        templateUrl: 'templates/admin/admin-delete-category.html',
        controller: 'adminDeleteCategoryController'
    });

    $routeProvider.when('/admin/towns', {
        templateUrl: 'templates/admin/admin-towns.html',
        controller: 'adminTownsController'
    });

    $routeProvider.when('/admin/towns/add', {
        templateUrl: 'templates/admin/admin-add-town.html',
        controller: 'adminAddTownController'
    });

    $routeProvider.when('/admin/towns/edit/:id', {
        templateUrl: 'templates/admin/admin-edit-town.html',
        controller: 'adminEditTownController'
    });

    $routeProvider.when('/admin/towns/delete/:id', {
        templateUrl: 'templates/admin/admin-delete-town.html',
        controller: 'adminDeleteTownController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});

app.run(function ($route, $rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
            // Authorization check: anonymous site visitors cannot access user routes
            $location.path("/");
        }
        if ($location.path().indexOf("/user/ads") != -1) {
            $rootScope.showStatuses = true;
        }
        else {
            $rootScope.showStatuses = false;
        }
    })
});