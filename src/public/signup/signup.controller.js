(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['allMenuItems'];  
function SignUpController(allMenuItems) {
  var $ctrl = this;
  $ctrl.user =  {} ;
  $ctrl.allMenuItems = allMenuItems;

  for (var category in allMenuItems) {
    console.log(category);
    console.log(category.menu_items);
    console.log(menu_items);
    
    for (item in category.menu_items) {
      if (item.short_name == "A1") {
        console.log(item.short_name + " -> " + item.description)
      }
    }
  }  

  $ctrl.submit = function () {
    console.log("First name: " + $ctrl.user.firstname);
  }  
}

})();
