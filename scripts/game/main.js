const score = 0;
document.getElementById("scoreCounter").innerHTML = score;

function click() {
    score += 1;
    document.getElementById("scoreCounter").innerHTML = score;
}
