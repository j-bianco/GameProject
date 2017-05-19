angular
  .module("gameApp")
  .service("monstersService", function(shopService) {

// Declaration of Variable
    var _monsters = [];
    var _monstersOne = [];
    var _monstersTwo = [];
    var _monstersThree = [];
    var _weapons = shopService.getWeapons();
    var _armor = shopService.getArmor();
    var _currentMonster = _monsters[0];
    var _monsterWeapons = shopService.getMonsterWeapons();



    // Use this function to get a random number within a range.
    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Monster Constructor
    var Monster = function (name, health, strength, gold, weapon, armor, image, description, trashTalk) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.gold = gold;
      this.weapon = weapon;
      this.armor = armor;
      this.image = image;
      this.description = description;
      this.trashTalk = trashTalk;
      this.isAlive = function () {
        return this.health > 0;
      }
    }

// Create our monsters

// Level 1
    _monstersOne.push(new Monster(
      "PidgeonKicker the Goblin", 
      50, 
      20, 
      getRandomInRange(10, 50), 
      _monsterWeapons[0], 
      _armor[0], 
      `../images/Monsters/Goblin.jpg`, 
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem.", 
      // TrashTalk
      "The goblin steps forward, eagerly swinging a chipped sword and singing: 'Goblins chew and goblins bite/ Goblins cut and goblins fight/ Stab the dog and cut the horse/ Goblins eat and take by force!/ Chase the baby, catch the pup/ Bonk the head to shut it up/ Bones be cracked, flesh be stewed/ We be goblins! You be food!"))

    _monstersOne.push(new Monster(
      "ScaleWort the Kobold", 
      75, 
      35, 
      getRandomInRange(20, 60), 
      _monsterWeapons[1], 
      _armor[0], 
      `../images/Monsters/Kobold.jpg`, 
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem.",
      // trashTalk
      "This be Kobold Trash Talking!"
      ))

    _monstersOne.push(new Monster(
      "BugBear", 
      100, 
      55, 
      getRandomInRange(50, 80), 
      _monsterWeapons[2], 
      _armor[0], 
      `../images/Monsters/BugBear.jpg`, 
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem.",
      // TrashTalk
      "This be BugBear Trash Talking!"
      ))

    _monstersOne.push(new Monster(
      "HobGoblin", 
      150, 
      70, 
      125, 
      _monsterWeapons[3], 
      _armor[0], 
      `../images/Monsters/HobGoblin.jpg`, 
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem.",
      // trashTalk
      "This be HobGoblin Trash Talking!"
      ))

// Level 2
    _monstersTwo.push(new Monster(
      "Bony the Skeleton", 
      50, 
      20, 
      getRandomInRange(10, 50), 
      _monsterWeapons[0], 
      _armor[0], 
      `../images/Monsters/Skeleton.jpg`, 
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem.",
      // TrashTalk
      "This be Skeleton Trash Talking!"))

    _monstersTwo.push(new Monster(
      "Rotty the Zombie", 
      75, 
      35, 
      getRandomInRange(20, 60), 
      _monsterWeapons[1], 
      _armor[0], 
      `../images/Monsters/Zombie.jpg`, 
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem.",
      // TrashTalk
      "This be Zombie Trash Talking!"))

    _monstersTwo.push(new Monster(
      "Casper the Wraith", 
      100, 
      55, 
      getRandomInRange(50, 80), 
      _monsterWeapons[2], 
      _armor[0], 
      `../images/Monsters/wraith.jpg`, 
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem.", 
      // TrashTalk
      "This be Wraith Trash Talking!"))

    _monstersTwo.push(new Monster(
      "Robes the Necromancer", 
      150, 
      70, 
      125, 
      _monsterWeapons[3], 
      _armor[0], 
      `../images/Monsters/Necromancer.jpg`, 
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dignissimos voluptates tempore doloremque alias, repudiandae nobis eius aliquam. Repellendus nesciunt omnis incidunt totam, animi nisi quis voluptas recusandae illum voluptatem.",
      // TrashTalk
      "This be Necromancer Trash Talking!"))

      // Declaration of Function for other controllers and services to call monsters
    this.getMonsters = function () {
      if (_monstersOne.length > 0) {
        _monsters = _monstersOne;
      } else if (( _monstersOne.length == 0) && (_monstersTwo.length > 0)) {
        _monsters = _monstersTwo;
      } else {
        _monsters = _monstersThree;
      }
      return _monsters
    }

    this.currentMonster = function () {
      return _currentMonster
    }
})