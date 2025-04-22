/*========================GARBLED NONSESE=======================================================================================
After thoroughly reading through this file, any form of the word "increment" may loose meaning for a random amount of time.
This warning is not to be ignored.
==============================================================================================================================*/

// Set variables
let score = 0;
let incrementAmount = 1;
let incrementIncrementerCost = 25;
let upgradeCostScaling = 1.15;

// Set elements
document.getElementById("scoreCounter").innerHTML = score;

// INCREMENTER
function increment() {
    let manualIncrementLog = "Increment score manually";
    score += incrementAmount;
    document.getElementById("scoreCounter").innerHTML = score;
    console.log(manualIncrementLog)
}
document.getElementById("incrementer").addEventListener('click', increment);

// UPGRADES
function incrementIncrementer() {
    if (score >= upgradeIncementerCost) {
        incrementIncementerCost *= upgradeCostScaling;
        incrementAmount += 1;
    }
}
document.getElementById("incrementIncrementer").addEventListener('click', incrementIncrementer);
