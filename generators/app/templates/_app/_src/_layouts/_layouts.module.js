
(function(){

    'use strict';

    angular
        .module('app.layouts', [])
        .config(configuration);

    function configuration($stateProvider){

        //add your state mappings here
        $stateProvider
            .state('Layouts', {
                    url:'/',
                    views: {
                        '@':{
                            templateUrl:'src/layouts/layouts.html'
                        },
                        'header@Layouts':{
                            templateUrl:'src/layouts/header.html'
                        },
                        'content@Layouts':{
                            templateUrl:'src/layouts/home.html',
                            controller: 'layoutsCtrl as vm'

                        }
                    }
                }
            );

    }

}());
