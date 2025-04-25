/*========================GARBLED NONSENSE======================================================================================
After thoroughly reading through this file, any form of the word "increment" may loose meaning for a random amount of time.
This warning is not to be ignored.
==============================================================================================================================*/

// Set variables
let score = 0;
let incrementAmount = 1;
let autoIncrementAmount = 0;
let autoIncrementCounter = 0;
let upgradeCostScaling = 1.25;

let incrementIncrementorCost = 25;
let constantIncrementor1Cost = 100;

let constantIncrementor1Amount = 0;

// Set elements
document.getElementById("scoreCounter").innerHTML = score;
document.getElementById("incrementIncrementorCostCounter").innerHTML = incrementIncrementorCost;
document.getElementById("constantIncrementor1CostCounter").innerHTML = constantIncrementor1Cost;

// INCREMENTOR
function increment() {
    score += incrementAmount;
    document.getElementById("scoreCounter").innerHTML = score;
    console.log("Increment score");
}
document.getElementById("incrementor").addEventListener('click', increment);

// INCREMENTS (upgrades)
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

// FACTORIES (auto incrementors)
function incrementConstantIncrementor1() {
    if (score >= constantIncrementor1Cost) {
        constantIncrementor1Amount += 1;
        autoIncrementAmount += 1;
        score -= constantIncrementor1Cost;
        constantIncrementor1Cost *= upgradeCostScaling;
        score = Math.round(score);
        constantIncrementor1Cost = Math.round(constantIncrementor1Cost);
        document.getElementById("constantIncrementor1CostCounter").innerHTML = constantIncrementor1Cost;
        document.getElementById("scoreCounter").innerHTML = score;
        console.log("Increment constant incrementor 1");
    }
    else {
        console.log("Insufficient score to increment constant incrementor 1");
    }
}
document.getElementById("consantIncrementor1").addEventListener('click', incrementConstantIncrementor1);

function autoIncrementScore() {
    score += autoIncrementAmount;
    document.getElementById("autoScoreCounter").innerHTML = autoIncrementAmount;
}

function mainloop() {
    setInterval(autoIncrementScore, 1000);
}