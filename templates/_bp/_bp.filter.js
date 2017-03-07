
(function(){

    'use strict';

    angular
        .module('app.<%= moduleName %>')
        .filter('<%= filterName %>', <%= filterName %>);

    function <%= filterName %>(){
        return function (input){
            return 'do some magic with ' + input;
        };
    }

}());
