var app = angular.module("gameApp", ["ui.router"]) //dependency injectors

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/title")

  $stateProvider
    .state("heroes", {
      url: "/heroes",
      templateUrl: "./views/heroes.html",
      controller: "heroesController"
    })

    .state("monsters", {
      url: "/monsters",
      templateUrl: "./views/monsters.html",
      controller: "monstersController"
    })

    .state("adventure", {
      url: "/adventure",
      templateUrl: "./views/adventure.html",
      controller: "adventureController"
    })

    .state("shop", {
      url: "/shop",
      templateUrl: "./views/shop.html",
      controller: "shopController"
    })

    .state("title", {
      url: "/title",
      templateUrl: "./views/title.html",
      controller: "titleController"
    })

    .state("combatResolution", {
      url: "/combat-resolution",
      templateUrl: "./views/combat_resolution.html",
      controller: "combatResolutionController"
    })

})