(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$rootScope', 'allMenuItems'];  
function SignUpController($rootScope, allMenuItems) {
  var $ctrl = this;
  $ctrl.user =  {} ;
  $ctrl.allMenuItems = allMenuItems;

  $ctrl.checkFavorite = function () {
    $ctrl.user.favDish.name ="";
    if ($ctrl.user.favDish.short_name) {
      $ctrl.user.favDish.short_name = $ctrl.user.favDish.short_name.toUpperCase();
      for (var category in allMenuItems) {
        for (var item in $ctrl.allMenuItems[category].menu_items) {
          if ($ctrl.allMenuItems[category].menu_items[item].short_name == $ctrl.user.favDish.short_name) {
            $ctrl.user.favDish.name = $ctrl.allMenuItems[category].menu_items[item].name;
            $ctrl.user.favDish.description = $ctrl.allMenuItems[category].menu_items[item].description;
            $ctrl.user.favDish.category = category;
            return true;
          }            
        }
      }
    }
    return false;
  }  

  $ctrl.submit = function () {
    $rootScope.user = $ctrl.user;
  }  

}

})();
