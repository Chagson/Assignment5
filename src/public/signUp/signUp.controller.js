(function () {

angular.module('public')
.controller('signUpController', signUpController);
signUpController.$inject = ['MenuService'];
function signUpController(MenuService) {
  var reg = this;
  reg.item = null;
  reg.itemError = false;
  reg.infosSaved = false;
  reg.submit = function () {
    MenuService.getMenuItem(reg.user.category_short_name, reg.user.menu_number)
      .then(function (item) {
        reg.item = item;
        reg.completed = true;
        console.log(reg.item);
        if (reg.item == null) {
          reg.itemError = true;
        } else {
          reg.itemError = false;
          MenuService.setUserInfos(reg.user.lastname, reg.user.firstname, reg.user.email, reg.user.phone, reg.item, reg.user.category_short_name);
          reg.infosSaved = true;
        }
      })
      .catch(function (error) {
        console.error('Error retrieving menu item:', error);
      });
  };
}

})();
