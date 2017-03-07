
(function(){

    'use strict';

    angular.module('app.core')
        .config(configuration)
        .run(routingEvents);

    function configuration($urlRouterProvider){

        $urlRouterProvider.otherwise('/');

    }

    function routingEvents($rootScope){
        //on routing error
        $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
            //do some logging and toasting
        });

        //on routing error
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            //do some title setting
            $rootScope.pageTitle = toState.title || 'ng-voi';
        });
    }

}());
