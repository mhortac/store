/*global angular*/

(function (angular) {
    // It is not a statement, but a literal expression.
    // The purpose of "use strict" is to indicate that the code should be
    // executed in "strict mode".
    'use strict';
    //  Here we declare the main module
    //  The module's name is Application
    angular
    
    .module('Application')
    .config(CategoriesRoutes)
    .controller('CategoriesController', CategoriesController)

    //  Injecting dependencies
    CategoriesRoutes.$inject = ["$routeProvider"];
    CategoriesController.$inject = ["$scope", "$http", "$routeParams"];
    
      
    function CategoriesRoutes ($routeProvider) {
        $routeProvider.when('/main/category/:categoryId/', { 
            controller: 'CategoriesController', templateUrl: '/static/app/main/main.template.html'
        });
    };

    function CategoriesController ($scope, $http, $routeParams) {
        console.log($routeParams)
    };

}(angular));
