
(function(){

    'use strict';

    angular
        .module('app.<%= moduleName %>')
        .directive('<%= directiveName %>', <%= directiveName %>);

    function <%= directiveName %>(){

        return {
            link: link
        };

        function link(scope, elem, attrs){

        }

    }
}());
