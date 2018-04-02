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
    .service('Source', Source)

    //  Injecting dependencies
    Source.$inject = ["$http", "$q"];
  
    function Source ($http, $q) {

        let categoriesCollection = null;
        let productsCollection = null;

        return {
            getCategories: function (params) {
                return $q(function (resolve, reject) {
                    if (categoriesCollection) {
                        return resolve(categoriesCollection);
                    } else {
                        $http.get('/static/assets/categories.json')
                        .success(function (res) {
                            categoriesCollection = res.categories;
                            resolve(categoriesCollection);
                        })
                        .error(function(err) {
                            console.log('ERROR: Importing categories has failed.');
                            console.log(err);
                        })
                    }
                });
            }
        }
    };

}(angular));
