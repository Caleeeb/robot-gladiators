// create robot name
var playerName = window.prompt("What is your robot's name?");

//player robot stats
var playerHealth = 100;
var playerAttack = 10;

//enemy robot stats
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function() {
    //alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
};

fight();