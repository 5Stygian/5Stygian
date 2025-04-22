// Set elements
let incrementAmount = 1;
let score = 0;
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
function upgradeIncrementer() {
    incrementAmount += 1;
}
