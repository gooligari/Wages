class NavbarController {
  constructor() {
    
    var app = angular.module('plunker', []);    
app.controller('MainCtrl', function($scope) {
  $scope.activeTab = 'personal';

  $scope.setActiveTab = function(value) {
    $scope.activeTab = value;
  };
});
    
  }
  
}

export default NavbarController;

