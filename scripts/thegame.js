function getRndInteger() {
  return Math.floor(Math.random() * 1000001); // Generates 0-1 million
}

function theReminder() {
  if (getRndInteger() === 555555) { // 1/1000000 chance
    window.alert("You lost the game!\nThis is a 1 in 1 million chance\nCheck /scripts/thegame.js for confirmation");
  }
}

theReminder(); // Call the function when the website loads
