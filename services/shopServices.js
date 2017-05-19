angular
  .module("gameApp")
  .service("shopService", function () {

    // Use this function to get a random number within a range.
    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Declaration of Variables
    var _weapons = []
    var _armor = []
    var _potions = []
    var _monsterWeapons = []
    var _partyPotions = []

    // Weapon Constructor
    var Weapon = function (name, minDamage, maxDamage, cost, image) {
      this.name = name;
      this.minDamage = minDamage;
      this.maxDamage = maxDamage;
      this.cost = cost;
      this.image = image;
      this.type = "Weapon"
    }

    // Armor Constructor
    var Armor = function (name, absorb, cost, image) {
      this.name = name;
      this.absorb = absorb;
      this.cost = cost;
      this.image = image;
      this.type = "Armor"
    }

    // Heal Potion Constructor
    var Heal = function (name, health, cost, image, bImage) {
      this.name = name;
      this.health = health;
      this.cost = cost;
      this.image = image;
      this.bImage = bImage;
      this.type = "Heal"
    }

    // Create our Shop
    _weapons.push(new Weapon("Gauntlet", 6, 12, 0, "../images/Weapons/gauntlets3.jpg"))
    _weapons.push(new Weapon("Druidic Spear", 6, 12, 0, "../images/Weapons/Spear2.png"))
    _weapons.push(new Weapon("Tribal Axe", 6, 12, 0, "../images/Weapons/TribalAxe2.jpg"))
    _weapons.push(new Weapon("Burning Hands", 6, 12, 0, "../images/Weapons/BurningHands2.jpg"))
    _weapons.push(new Weapon("Spiked Gauntlet", 6, 12, 50, "../images/Weapons/spikedGauntlet.jpg"))
    _weapons.push(new Weapon("Magic Short Sword", 6, 15, 80, "../images/Weapons/ShortSword2.jpg"))
    _weapons.push(new Weapon("Wicked Axe", 12, 30, 150, "../images/Weapons/WickedAxe2.jpg"))
    _weapons.push(new Weapon("Holy Long Sword", 20, 40, 250, "../images/Weapons/HolyLongSword2.jpg"))
    _weapons.push(new Weapon("Flaming Claymore", 40, 60, 500, "../images/Weapons/FlamingClaymore2.jpg"))

    _armor.push(new Armor("Sturdy Leather", .14, 200, "../images/Armor/LeatherArmor2.jpg"))
    _armor.push(new Armor("Worn Scale Mail", .24, 300, "../images/Armor/ScaleMail2.jpg"))
    _armor.push(new Armor("Fortified Chain", .32, 450, "../images/Armor/ChainMail2.jpg"))
    _armor.push(new Armor("Shimmering Plate", .45, 600, "../images/Armor/FullPlate2.jpg"))

    // Potions have a second, smaller picture for the backpack
    _potions.push(new Heal("Small Heals", 20, 10, "../images/Potions/SmallHealthPotion2.jpg", "../images/Potions/SmallHealthPotion3.jpg"))
    _potions.push(new Heal("Medium Heals", 50, 25, "../images/Potions/ModHealthPotion2.jpg", "../images/Potions/ModHealthPotion3.jpg"))
    _potions.push(new Heal("Large Heals", 100, 50, "../images/Potions/LargeHealthPotion2.jpg", "../images/Potions/LargeHealthPotion3.jpg"))
    _potions.push(new Heal("Full Heals", 600, 250, "../images/Potions/FullHealthPotion2.jpg", "../images/Potions/FullHealthPotion3.jpg"));

    // Monster Weapons Array
    _monsterWeapons.push(new Weapon("Jagged Dagger", getRandomInRange(1, 3), getRandomInRange(4, 5)));
    _monsterWeapons.push(new Weapon("Sharp Dagger", getRandomInRange(2, 4), getRandomInRange(5, 7)));
    _monsterWeapons.push(new Weapon("Piercing Dagger", getRandomInRange(3, 5), getRandomInRange(6, 8)));
    _monsterWeapons.push(new Weapon("Shining Dagger", getRandomInRange(6, 8), getRandomInRange(9, 11)));

    // Declaration of Functions for other controllers and services
    this.getWeapons = function () {
      return _weapons;
    }

    this.getArmor = function () {
      return _armor;
    }

    this.getPotions = function () {
      return _potions;
    }

    this.getMonsterWeapons = function() {
      return _monsterWeapons
    }

    this.addPartyPotion = function (potion) {
      _partyPotions.push(potion)
    }

    this.getPartyPotions = function () {
      return _partyPotions
    }
})