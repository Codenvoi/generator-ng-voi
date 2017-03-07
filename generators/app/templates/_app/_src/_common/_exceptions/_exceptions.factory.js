/*
 * Name: exceptions.factory.js
 * Purpose: Handle Exceptions
 * */

(function(){
  'use strict';
  angular
      .module('app.common')
      .factory('$exceptionHandler', exceptionOverwrite)
      .factory('httpInterceptors', httpInterceptors)
      .config(configs);

  function exceptionOverwrite($log){
    return function myExceptionHandler(exception, cause) {
      $log.error("EXCEPTION HANDLER: CODE ERROR");
      $log.error(exception, cause);
    };
  }

  function httpInterceptors($q, $log){
    return {
      // response
      response: function(resp) {
        return resp;
      },
      // response error
      responseError: function responseError(rejection) {
        console.log(rejection);
        if(rejection.data){
          var errMsg = rejection.data.message || "There's something wrong, we are figuring it out.";
        }
        else{
          var errMsg = "There's something wrong, we are figuring it out.";
        }
        $log.error("HTTP INTERCEPTOR: RESPONSE ERROR");
        // -1 is file upload is canceled by user
        if(rejection.status != -1){
          // alertFactory.error(null, errMsg);
        }
        return $q.reject(rejection);
      }
    };
  }

  function configs($httpProvider){
    $httpProvider.interceptors.push('httpInterceptors');
  }

}());
