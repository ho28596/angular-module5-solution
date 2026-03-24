(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

function SignUpController() {
  var $ctrl = this;

  $ctrl.valid = function () {
    console.log("First name: " + user.firstname);
  }  
}

})();
