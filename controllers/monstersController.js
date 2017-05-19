angular
  .module("gameApp")
  .controller("monstersController", function($scope, monstersService, shopService) {

    $scope.monsters = monstersService.getMonsters()
      
    $scope.incidentOne = true;
    $scope.incidentTwo = false;
    $scope.incidentThree = false;


  })