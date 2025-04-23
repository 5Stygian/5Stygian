/*========================GARBLED NONSENSE======================================================================================
After thoroughly reading through this file, any form of the word "increment" may loose meaning for a random amount of time.
This warning is not to be ignored.
==============================================================================================================================*/

// Set variables
let score = 0;
let incrementAmount = 1;
let incrementIncrementorCost = 25;
let upgradeCostScaling = 1.15;

// Set elements
document.getElementById("scoreCounter").innerHTML = score;

// INCREMENTOR
function increment() {
    score += 1;
    document.getElementById("scoreCounter").innerHTML = score;
    console.log("")
}
document.getElementById("incrementor").addEventListener('click', increment);

// UPGRADES
function incrementIncrementor() {
    if (score >= upgradeIncrementorCost) {
        incrementIncrementorCost *= upgradeCostScaling;
        incrementAmount += 1;
        document.getElementById("incrementIncrementor").innerHTML = incrementIncrementorCost
    }
}
document.getElementById("incrementIncrementor").addEventListener('click', incrementIncrementor);
