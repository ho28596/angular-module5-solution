(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['$rootScope'];
function MyInfoController($rootScope) {
  var myInfoCtrl = this;
  myInfoCtrl.user = $rootScope.user;
}

})();
