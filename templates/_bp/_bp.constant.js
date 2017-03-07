
(function(){

    'use strict';

    var <%= constantName %> = "constant example";

    angular
        .module('app.<%= moduleName %>')
        .constant('<%= constantName %>', <%= constantName %>);

}());
