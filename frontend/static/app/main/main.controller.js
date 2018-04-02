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
    .config(MainRoutes)
    .controller('MainController', MainController)

    //  Injecting dependencies
    MainRoutes.$inject = ["$routeProvider"];
    MainController.$inject = ["$scope", "$http", "$location"];
    
      
    function MainRoutes ($routeProvider) {
        $routeProvider.otherwise( { redirectTo: '/main/'});
        $routeProvider.when('/main/', {
            controller: 'MainController', templateUrl: '/static/app/main/main.template.html'
        });
    };

    function MainController ($scope, $http, $location) {
        //  Import all the categories fron json file.
        $http.get('/static/assets/categories.json')
        .success(function (res) {
            console.log('Categories: ', res.categories.length); 
            $scope.categoriesCollection = res.categories;
        });

        $scope.onCategoryClicked = function (params) {
            $location.path(`/main/category/${params.id}`)
        }
    };

}(angular));
