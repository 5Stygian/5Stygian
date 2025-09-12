const theReminder = () => {
  let rndInt = Math.floor(Math.random() * 1000001);
  if (rndInt === 555555) { // 1/1000000 chance
    window.alert("You lost the game!\nThis is a 1 in 1 million chance\nCheck /scripts/thegame.js for confirmation");
    console.log(`You rolled a ${rndInt}!\n\nYou lost the game, but you already knew that`);
  } else {
    console.log(`You rolled a ${rndInt}!\n\nYou won the game, or have you?`);
  }
}
