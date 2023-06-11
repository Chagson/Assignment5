(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.userInfos = {
    lastname: '',
    firstname: '',
    email: '',
    phone: '',
    desk_short_name:'',
    item:{},
  };
  service.test = false;
  service.setUserInfos = function (lastname,firstname,email,phone,item,desk_short_name) {
    service.userInfos.lastname = lastname;
    service.userInfos.firstname = firstname;
    service.userInfos.email = email;
    service.userInfos.phone = phone;
    service.userInfos.item = item;
    service.userInfos.desk_short_name = desk_short_name;
    service.test = true;
    console.log("done");
    };

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };
  service.getMenuItem = function (categoryShortname, menuNumber) {
    return $http.get(ApiPath + '/menu_items/' + categoryShortname + '/menu_items/' + menuNumber + '.json').then(function (response) {
      return response.data;
    });
  };
}



})();
