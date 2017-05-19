angular
  .module("gameApp")
  .controller("adventureController", function ($scope, heroesService, shopService, monstersService) {

    $scope.partyGold = heroesService.partyTreasure()
    $scope.weapons = shopService.getWeapons()
    $scope.armor = shopService.getArmor()
    $scope.potions = shopService.getPotions()
    $scope.heroes = heroesService.getHeroes()
    $scope.currentHero = heroesService.currentHero()
    $scope.monsters = monstersService.getMonsters()
    $scope.currentMonster = monstersService.currentMonster()
    $scope.partyPotions = shopService.getPartyPotions()

    // Use this function to get a random number within a range.
    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Declaring combat Log
    var combatLog1 = document.getElementById("combatLog1");
      combatLog1.innerHTML = "You take each other's measure. Who's going to make the first move?";

    // Declaring endPhase Variable
    $scope.endPhase = false;
     
      
    


    //Attack Phase Function: Hero attacks, then checks monster health.
    //if monster is still alive, monster attacks
    //Checks to see if Hero is alive
    $scope.attackPhase = function () {
      if (!$scope.currentHero.isAlive()) {
        combatLog1.innerHTML = `${$scope.currentHero.name} is Dying! They must be healed before they can fight!`
        combatLog2.innerHTML = ``
      } else {

        // Variable assigning amount of Hero Damage
        var grossHeroDamageDone = Math.floor(getRandomInRange($scope.currentHero.weapon.minDamage, $scope.currentHero.weapon.maxDamage) + $scope.currentHero.strength);

        var monsterAbsorbed = Math.floor(grossHeroDamageDone * ($scope.monsters[0].armor.absorb));

        var heroDamageDone = grossHeroDamageDone - monsterAbsorbed;

        // Variable assigning amount of Monster Damage
        var grossMonsterDamageDone = Math.floor(getRandomInRange($scope.monsters[0].weapon.minDamage, $scope.monsters[0].weapon.maxDamage) + $scope.monsters[0].strength);

        var heroAbsorbed = Math.floor(grossMonsterDamageDone * ($scope.currentHero.armor.absorb));

        var monsterDamageDone = grossMonsterDamageDone - heroAbsorbed;
        // Hero damaging Monster
        $scope.monsters[0].health -= heroDamageDone;

        // logging the affects of the attack
        combatLog1.innerHTML = `${$scope.currentHero.name} dealt ${heroDamageDone} damage to the ${$scope.monsters[0].name} (${monsterAbsorbed} absorbed)!). The ${$scope.monsters[0].name} has ${$scope.monsters[0].health} health left.`;

        // checking to see if the current monster is still alive and what happend is he is not
        if (!$scope.monsters[0].isAlive()) {
          heroesService.updatePartyTreasure($scope.monsters[0].gold);
          $scope.partyGold = heroesService.partyTreasure()
          combatLog2.innerHTML = `${$scope.currentHero.name} has defeated the ${$scope.monsters[0].name}! ${$scope.monsters[0].gold} gold pieces have been added to your account, bringing you up to a total of ${$scope.partyGold}. Have a nice day!`;
          $scope.monsters.splice(0, 1)

          if ($scope.monsters.length == 0) {
            combatLog1.innerHTML = "You have defeated all of the enemies!"
            combatLog2.innerHTML = "You should head back to town to enjoy the celebrations!"
            $scope.endPhase = true;
          } 



                // Monster's rebuttal if still alive
        } else if ($scope.monsters[0].isAlive()) {
          $scope.currentHero.health -= monsterDamageDone;
          $scope.monsters[0].gold += monsterDamageDone;
          heroesService.updatePartyTreasure(monsterDamageDone * -1);
          $scope.partyGold = heroesService.partyTreasure();
          combatLog2.innerHTML = `${$scope.monsters[0].name} used his ${$scope.monsters[0].weapon.name} to deal ${monsterDamageDone} damage to ${$scope.currentHero.name} (${heroAbsorbed} absorbed!). ${$scope.currentHero.name} has ${$scope.currentHero.health} health left. The ${$scope.monsters[0].name} stole ${monsterDamageDone} gold pieces, bringing ${$scope.currentHero.name}'s gold to ${$scope.partyGold}. Uh Oh!`
        }
        // Updating display of Party Treasure
        $scope.partyGold = heroesService.partyTreasure()
      };
    }

    // Function of bottom row 
    //Choosing a Hero
    var currentHeroIndex = null;
    $scope.chooseCurrentHero = function (hero) {
      for (var i = 0; i < $scope.heroes.length; i++) {
        if ($scope.heroes[i] == hero) {
          currentHeroIndex = i
          $scope.currentHero = $scope.heroes[i];
          console.log($scope.currentHero)
        }
      }
    }

    //Using a Potion from the Backpack
        var currentPartyPotionIndex = 0;
        var currentPartyPotion = null;
    $scope.usePotionClick = function (potion) {
      for (var i = 0; i < $scope.partyPotions.length; i++) {
        if ($scope.partyPotions[i] == potion) {
          currentPartyPotionIndex = i;
          currentPartyPotion = $scope.partyPotions[i]
          combatLog1.innerHTML = currentPartyPotion.name
          combatLog2.innerHTML = "" 
        }
      }
      if ($scope.currentHero == null) {
        combatLog1.innerHTML = "You have to choose a hero!"
      } else {
        $scope.currentHero.health += currentPartyPotion.health;
        combatLog1.innerHTML = `You have used the ${currentPartyPotion.name}. You heal for ${currentPartyPotion.health}.`
        combatLog2.innerHTML = "It's time to get back in the fight!"
        $scope.partyPotions.splice(currentPartyPotionIndex, 1)        
      }
    }
})