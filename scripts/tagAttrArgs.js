// logic for getting attributes from html tags and setting css properties

// sets the background image 
const setBgImage = async () => {
  const selectedTags = document.querySelectorAll("#taa_img");
  console.log(selectedTags);
  for (let i=0; i < selectedTags.length; i++) {
    selectedTags[i].style.backgroundImage = selectedTags[i].getAttribute("data-bgImg");
  }
  console.log("${selectedTags.getAttribute("data-bgImg")}");
}

// execs all functions at once
const setAttrs = async () => {
  await setBgImage();
}

document.addEventListener("onload", setAttrs);
