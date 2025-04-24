/*========================GARBLED NONSENSE======================================================================================
After thoroughly reading through this file, any form of the word "increment" may loose meaning for a random amount of time.
This warning is not to be ignored.
==============================================================================================================================*/

// Set variables
let score = 0;
let incrementAmount = 1;
let incrementIncrementorCost = 25;
let upgradeCostScaling = 1.25;

// Set elements
document.getElementById("scoreCounter").innerHTML = score;
document.getElementById("incrementIncrementorCostCounter").innerHTML = incrementIncrementorCost;

// INCREMENTOR
function increment() {
    score += incrementAmount;
    document.getElementById("scoreCounter").innerHTML = score;
    console.log("Increment score");
}
document.getElementById("incrementor").addEventListener('click', increment);

// UPGRADES
function incrementIncrementor() {
    if (score >= incrementIncrementorCost) {
        incrementAmount += 1;
        score -= incrementIncrementorCost;
        incrementIncrementorCost *= upgradeCostScaling;
        score = Math.round(score);
        incrementIncrementorCost = Math.round(incrementIncrementorCost);
        document.getElementById("incrementIncrementorCostCounter").innerHTML = incrementIncrementorCost;
        document.getElementById("scoreCounter").innerHTML = score;
        console.log("Incrementor incremented");
    }
    else {
        console.log("Insufficient score to increment incrementor");
    }
}
document.getElementById("incrementIncrementor").addEventListener('click', incrementIncrementor);
