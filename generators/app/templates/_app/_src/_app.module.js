/*
 * Name: app.module.js
 * */

(function(){

    'use strict';

    angular.module('app', [
        'app.core',
        'app.common',
        /*
         * Application directives/widgets
         * */
        'app.components',
        /*
         * Application modules, inject new modules below
         * */
        'app.layouts'
    ]);

}());
