class Highlight extends HTMLElement {
  static observedAttributes = ["color"];

  constructor() {
    super();
  }

  connectedCallback() {
    if (observedAttributes[0] == null) {
        this.style.color = "red";
    } else {
        this.style.color = observedAttributes[0];
    }
  }

  disconnectedCallback() {
  }

  connectedMoveCallback() {
  }

  adoptedCallback() {
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);
  }
}

customElements.define("ct-hl", Highlight);