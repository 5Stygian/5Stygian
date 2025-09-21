// logic for getting attributes from html tags and setting css properties

const tags = [
  "#taa_clr"
];

const attr = [
  "data-clr"
];

const property = [
  "color"
];

// sets the style of an element based on attributes
const setAttrStyles = async () => {
  for (let i = 0; i < tags.length; i++) {
    const selectedTags = document.querySelectorAll(`${tags[i]}`);
    console.log(selectedTags);
    for (let j = 0; j < selectedTags.length; j++) {
      let css = selectedTags[j].getAttribute(`${attr[j]}`);
      selectedTags[j].style[property[j]] = css;
    }
  }
}

// sets the background image
const setBgImage = async () => {
  const selectedTags = document.querySelectorAll(`#taa_img`);
  console.log(selectedTags);
  for (let j = 0; j < selectedTags.length; j++) {
    let css = selectedTags[j].getAttribute(`data-bgimg`);
    selectedTags[j].style.backgroundImage = `url(${css})`;
  }
}

export default genSetAttrStyles = async (tag) => {
  const selectedTags = document.querySelectorAll(tag);
  console.log(selectedTags);
  for (let j = 0; j < selectedTags.length; j++) {
    let css = selectedTags[j].getAttribute(tag);
    selectedTags[j].style.backgroundImage = css;
  }
}

// calls all functions. idk why that needs a whole function but it js makes sense to me
const start = async () => {
  console.log(`${tags}, ${attr}, ${property}`);
  setAttrStyles();
  setBgImage();
}

start();