// Set elements
let score = 0;
document.getElementById("scoreCounter").innerHTML = score;

// INCREMENTER
function increment() {
    score += 1;
    document.getElementById("scoreCounter").innerHTML = score;
    console.log("")
}

document.getElementById("incrementer").addEventListener('click', increment);
