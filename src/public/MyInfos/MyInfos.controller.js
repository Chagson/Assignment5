(function functionName() {
"use strict";
angular.module('public')
.controller('myInfosController', myInfosController);

myInfosController.$inject = ['MenuService'];
function myInfosController(MenuService) {
  var $ctrl = this;
  $ctrl.lastname = MenuService.userInfos.lastname;
  $ctrl.firstname = MenuService.userInfos.firstname;
  $ctrl.email = MenuService.userInfos.email;
  $ctrl.phone = MenuService.userInfos.phone;
  $ctrl.item = MenuService.userInfos.item;
  $ctrl.desk_short_name = MenuService.userInfos.desk_short_name;
  $ctrl.test = MenuService.test;


}
})();
