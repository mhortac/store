/*global angular*/

(function (angular) {
    // It is not a statement, but a literal expression.
    // The purpose of "use strict" is to indicate that the code should be
    // executed in "strict mode".
    'use strict';
    //  Here we declare the main module
    //  The module's name is Application
    angular
    
    .module('Application', ['ngRoute'])
    .run(MainRun)

    //  Injecting dependencies
    MainRun.$inject = ["$rootScope"];
    
      
    function MainRun ($rootScope) {
        console.log('Running Store...');        

    };

}(angular));
