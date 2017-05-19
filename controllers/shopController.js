angular
  .module("gameApp")
  .controller("shopController", function ($scope, shopService, heroesService) {

    $scope.weapons = shopService.getWeapons()
    $scope.armor = shopService.getArmor()
    $scope.potions = shopService.getPotions()
    $scope.heroes = heroesService.getHeroes()
    $scope.currentHero = heroesService.currentHero()
    $scope.partyGold = heroesService.partyTreasure()
    $scope.partyPotions = shopService.getPartyPotions()
    


    $scope.chooseWeaponsStore = function() {
      $scope.weaponsStore = true;
      $scope.armorStore = false;
      $scope.potionsStore = false;
    }

    $scope.chooseArmorStore = function() {
      $scope.weaponsStore = false;
      $scope.armorStore = true;
      $scope.potionsStore = false;
    }

    $scope.choosePotionsStore = function() {
      $scope.weaponsStore = false;
      $scope.armorStore = false;
      $scope.potionsStore = true;
    }

    var shopLog1 = document.getElementById("shopLog1");
      shopLog1.innerHTML = "Who will barter Better??";


   

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



// $(".weaponButtons").click(function () {
//    if (currentHero === "noName") {
//     $(`.heroSelect`).show()
//   } else {
//   index= $(this).attr("data");
//   if (currentHero.gold >= shop[index].cost) {
//     var purchasedWeapon = shop.splice(index, 1)
//     currentHero.gold -= purchasedWeapon[0].cost;
//     console.log("Thank you for purchasing the mighty " + purchasedWeapon[0].name + "!");
//     console.log(`You now have ${currentHero.gold} gold pieces left.`);
//     currentHero.weapon = purchasedWeapon[0];
//     console.log(`You now have the mighty ${purchasedWeapon[0].name} equipped!`);
//     currentHero = "noName"
//     printHeros()
//   } else {
//     $(`#poorManDiv`).show()

var currentWeapon = null;
$scope.weaponClick = function (weapon) {
  for (var i = 0; i < $scope.weapons.length; i++) {
    if ($scope.weapons[i] == weapon) {
      currentWeaponIndex = i;
      currentWeapon = $scope.weapons[i]
      shopLog1.innerHTML = currentWeapon.name
      shopLog2.innerHTML = "" 
    }
  }

  if ($scope.currentHero == null) {
    shopLog2.innerHTML = ""
    shopLog2.innerHTML = "Choose a hero!";
  } else if ($scope.partyGold <= currentWeapon.cost) {
    shopLog1.innerHTML = `${currentWeapon.name} is ${currentWeapon.cost}.`
    shopLog2.innerHTML = "You are too poor!"
  } else {
    // updateHeroWeapon(currentHero, currentWeapon)
    $scope.currentHero.weapon = currentWeapon;
    heroesService.updatePartyTreasure(currentWeapon.cost * -1);
    shopLog1.innerHTML = `Thank you for purchasing the mighty ${currentWeapon.name}. You will not regret it.`
    shopLog2.innerHTML = ``
    $scope.partyGold = heroesService.partyTreasure()
  }
}
 
 var currentArmor = null;
$scope.armorClick = function (armor) {
  for (var i = 0; i < $scope.armor.length; i++) {
    if ($scope.armor[i] == armor) {
      currentArmorIndex = i;
      currentArmor = $scope.armor[i]
      shopLog1.innerHTML = currentArmor.name
      shopLog2.innerHTML = "" 
    }
  }

  if ($scope.currentHero == null) {
    shopLog2.innerHTML = ""
    shopLog2.innerHTML = "Choose a hero!";
  } else if ($scope.partyGold <= currentArmor.cost) {
    shopLog1.innerHTML = `${currentArmor.name} is ${currentArmor.cost}.`
    shopLog2.innerHTML = "You are too poor!"
  } else {
    $scope.currentHero.armor = currentArmor;
    heroesService.updatePartyTreasure(currentArmor.cost * -1);
    shopLog1.innerHTML = `Thank you for purchasing the mighty ${currentArmor.name}. You will not regret it.`
    shopLog2.innerHTML = ``
    $scope.partyGold = heroesService.partyTreasure()
  }
}
    
    var currentPotion = null;
  $scope.potionClick = function (potion) {
    for (var i = 0; i < $scope.potions.length; i++) {
      if ($scope.potions[i] == potion) {
        currentPotionIndex = i;
        currentPotion = $scope.potions[i];
        shopLog1.innerHTML = currentPotion.name
        shopLog2.innerHTML = ""
      }
    }
    if ($scope.partyGold <= currentPotion.cost) {
      shopLog1.innerHTML = `${currentPotion.name} is ${currentPotion.cost}!`
      shopLog2.innerHTML = `You are too poor! No potion for you.`
    } else {
      heroesService.updatePartyTreasure(currentPotion.cost * -1);
      $scope.partyGold = heroesService.partyTreasure()
      shopService.addPartyPotion(currentPotion)
    }
  }

    var currentPartyPotionIndex = 0;
    var currentPartyPotion = null;
$scope.usePotionClick = function (potion) {
  for (var i = 0; i < $scope.partyPotions.length; i++) {
    if ($scope.partyPotions[i] == potion) {
      currentPartyPotionIndex = i;
      currentPartyPotion = $scope.partyPotions[i]
      shopLog1.innerHTML = currentPartyPotion.name
      shopLog2.innerHTML = "" 
    }
  }
  if ($scope.currentHero == null) {
    shopLog1.innerHTML = "You have to choose a hero!"
  } else {
    $scope.currentHero.health += currentPartyPotion.health;
    shopLog1.innerHTML = `You have used the ${currentPartyPotion.name}. You heal for ${currentPartyPotion.health}.`
    shopLog2.innerHTML = "It's time to get back in the fight!"
    $scope.partyPotions.splice(currentPartyPotionIndex, 1)
    
}
}





  })