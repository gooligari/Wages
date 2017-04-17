angular
  .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('AppCtrl', function ($scope, $mdSidenav) {
   $scope.toShow = "home"; // Default

    $scope.toggleLeft = function() {
        $mdSidenav("left")
          .toggle();
    };

    $scope.close = function () {
      $mdSidenav('left').close();
    };

    $scope.show = function (toShow) {
      $scope.toShow = toShow;
    };
});