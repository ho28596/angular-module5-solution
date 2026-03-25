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
    if ($ctrl.user.favDish.short_name) {
      $ctrl.user.favDish.short_name.toUpperCase();
      for (var category in allMenuItems) {
        if (category=="A"){
          console.log($ctrl.allMenuItems[category].menu_items);
        }
        for (var item in $ctrl.allMenuItems[category].menu_items) {
          if (category=="A"){
            console.log(item);
          }
          if (item.short_name == $ctrl.user.favDish.short_name) {
            console.log("Items found: " + $ctrl.user.favDish.short_name);
            return true;
          }            
        }
      }
    }
    console.log("Items NOT found: " + $ctrl.user.favDish.short_name);
    return false;
  }  

  $ctrl.submit = function () {
    console.log("First name: " + $ctrl.user.firstname);
  }  

}

})();
