angular
  .module("gameApp")
  .service("heroesService", function(shopService) {


var _heroes = [];

var _weapons = shopService.getWeapons();
var _armor = shopService.getArmor();

var _currentHero = null;



// Use this function to get a random number within a range.
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Hero Constructor
var Hero = function (name, health, strength, weapon, armor, image, description) {
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.weapon = weapon;
  this.armor = armor;
  this.image = image;
  this.description = description;
  this.isAlive = function () {
    return this.health > 0;
  }
}

// Adding heroes to array
_heroes.push(new Hero("Darian", 450, 10, _weapons[0], _armor[0], "../images/Heroes/Damian.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem."))
_heroes.push(new Hero("Eliza", 350, 20, _weapons[1], _armor[0], "../images/Heroes/Eliza.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem."))
_heroes.push(new Hero("Alaban", 250, 30, _weapons[2], _armor[0], "../images/Heroes/Alaban.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem."))
_heroes.push(new Hero("Kari", 250, 30, _weapons[3],  _armor[0], "../images/Heroes/Kari.jpg", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem."))

// Party Gold


this.partyTreasure = function() {
  return _partyGold
}

this.updatePartyTreasure = function(adjustment) {
  _partyGold += adjustment
}

var _partyGold = getRandomInRange(400, 1000);

 this.getHeroes = function() {
    return _heroes
 }

 this.chooseCurrentHero = function (hero) {
   for (var i = 0; i < _heroes.length; i++){
     if (_heroes[i] == hero) {
       _currentHero = _heroes[i];
       console.log(_currentHero)
     }
   }
 }

 this.currentHero = function() {
   return _currentHero
 }

});