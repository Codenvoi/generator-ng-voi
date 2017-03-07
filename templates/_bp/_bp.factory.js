
(function() {

    'use strict';

    angular
        .module('app.<%= moduleName %>')
        .factory('<%= factoryName %>Factory', <%= factoryName %>Factory);

    function <%= factoryName %>Factory() {

        return{
            test: test
        }

        function test(search){

            // some awesome code

        }

    }
}());
