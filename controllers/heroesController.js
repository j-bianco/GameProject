angular
  .module("gameApp")
  .controller("heroesController", function($scope, heroesService, shopService) {

    $scope.heroes = heroesService.getHeroes()



})