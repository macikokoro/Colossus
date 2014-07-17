var slaying = true;
//Math.random helps by randomizing the time a player hit the Colossus of Rhodes.
var playerHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (playerHit) {
    console.log("You hit the Colossus and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You did it! You beat the Colossus!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("No damage, the Colossus smashes you! You're flat!.");
    slaying = false;
  }
}
