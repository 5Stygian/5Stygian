let score = 0;
document.getElementById("scoreCounter").innerHTML = score;

function increment() {
    score += 1;
    document.getElementById("scoreCounter").innerHTML = score;
}

document.getElementById("incrementer").addEventListener('click', increment);
