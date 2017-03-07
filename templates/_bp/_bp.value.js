
(function(){

    'use strict';

    var <%= valueName %> = "value example";

    angular
        .module('app.<%= moduleName %>')
        .value('<%= valueName %>', <%= valueName %>);

}());
