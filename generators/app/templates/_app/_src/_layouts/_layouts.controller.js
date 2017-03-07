
(function(){

    'use strict';

    angular
        .module('app.layouts')
        .controller('layoutsCtrl', layoutsCtrl);

    function layoutsCtrl($localStorage){

        var vm = this;

        // retrieve storage value
        vm.storageValue = $localStorage.storageValue || "";

        vm.saveValue = saveValue;

        //

        function saveValue(value){
            $localStorage.storageValue = value;
        }

    }


}());
