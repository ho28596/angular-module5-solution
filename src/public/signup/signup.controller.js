(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['allMenuItems'];  
function SignUpController(allMenuItems) {
  var $ctrl = this;
  $ctrl.user =  {} ;
  $ctrl.allMenuItems = allMenuItems;

  $ctrl.checkFavorite = function () {
    IF ($ctrl.user.favDish.short_name) {
      console.log("Favorite dish: " + $ctrl.user.favDish.short_name);
    }
  }  

  $ctrl.submit = function () {
    console.log("First name: " + $ctrl.user.firstname);
  }  

}

})();
