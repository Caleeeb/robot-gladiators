// create robot name
var playerName = window.prompt("What is your robot's name?");

//player robot stats
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy robots
var enemyNames = ["Roborto", "Amy Android", "Chunky Daniels"];
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function(enemyName) {
  while(playerHealth > 0 && enemyHealth > 0) {

    // ask player if they'd like to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player chooses to skip the fight
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }
  
      // remove enemy's health by subtracting the amount set in the playerAttack var
      enemyHealth = enemyHealth - playerAttack;
      // Log a resulting message to the console so we know that it worked.
      console.log(
          playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      
      // award player money for winning	
      playerMoney = playerMoney + 20;	
      // leave while() loop since enemy is dead	
      break;	
    } else {	
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');	
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }
  } //end of loop
}; //end of fight function

for(var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1) + "!");
  } else {
    window.alert("You have lost your robot in battle! Game Over!")
  break;
  }
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
};