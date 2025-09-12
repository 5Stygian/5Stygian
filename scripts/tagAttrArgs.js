// logic for getting attributes from html tags and setting css properties

// sets the background image 
const setBgImage = async () => {
  const selectedTags = document.querySelectorAll("#taa_img");
  console.log(selectedTags);
  for (let i=0; i < selectedTags.length; i++) {
    let bgImg = selectedTags[i].getAttribute("data-bgimg");
    selectedTags[i].style.backgroundImage = `url(${bgImg})`;
  }
}

// execs all functions one at a time
const setAttrs = async () => {
  await setBgImage();
}

setAttrs();