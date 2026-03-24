(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

function SignUpController() {
  var $ctrl = this;
  $ctrl.user =  {} ;

  $ctrl.submit = function () {
    console.log("First name: " + $ctrl.user.firstname);
  }  
}

})();
